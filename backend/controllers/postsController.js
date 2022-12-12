import Joi from 'joi';
import Posts from '../models/posts';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import CustomErrorHandler from '../services/CustomErrorHandler';

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/posts'),
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(
            Math.random() * 1e9
        )}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    },
});

const handleMultipartData = multer({
    storage,
    limits: { fileSize: 1000000 * 5 },
}).single('thumbnail');

const postsController = { 
    async postsFunction(req, res, next) {
        handleMultipartData(req, res, async (err) => {
            if (err) {
                return next(CustomErrorHandler.serverError(err.message));
            }

            const filePath = req.file.path;

            const postsSchema = Joi.object({
                userId: Joi.number().required(),
                id: Joi.number().required(),
                title: Joi.string().required(),
                body: Joi.string().required(),
                category: Joi.string().required(),
                rating: Joi.number()
            });
            const { error } = postsSchema.validate(req.body);
            if (error) {
                // delete the uploded image
                fs.unlink(`${appRoot}/${filePath}`, (err) => {
                    if (err) {
                        return next(CustomErrorHandler.serverError(err.message));
                    }
                });
                return next(error);
            }

            const { userId, id, title, body, category, rating } = req.body;
            let postsDocument;

            try {
                postsDocument = await Posts.create({
                    thumbnail: filePath,
                    userId,
                    id,
                    title,
                    body,
                    category,
                    rating
                });

            } catch (err) {
                fs.unlink(`${appRoot}/${filePath}`, (err) => {
                    if (err) {
                        return next(CustomErrorHandler.serverError(err.message));
                    }
                });
                return next(err);
            }


            res.status(201).json(postsDocument);
        });
    }
}

export default postsController;