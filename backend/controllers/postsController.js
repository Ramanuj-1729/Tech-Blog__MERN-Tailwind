import Joi from 'joi';
import Posts from '../models/Posts';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import CustomErrorHandler from '../services/CustomErrorHandler';

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads'), 
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
    // create post 
    async createPost(req, res, next) {
        handleMultipartData(req, res, async (err) => {
            if (err) {
                return next(CustomErrorHandler.serverError(err.message));
            }

            const filePath = req.file.path;

            const postsSchema = Joi.object({
                userName: Joi.string().required(),
                title: Joi.string().required(),
                body: Joi.string().required(),
                category: Joi.string().required()
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

            const { userName, title, body, category } = req.body;
            let postsDocument;

            try {
                postsDocument = await Posts.create({
                    thumbnail: filePath,
                    userName,
                    title,
                    body,
                    category
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
    },

    // update post
    async updatePost(req, res, next) {
        try {
            const updatedPost = await Posts.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedPost);
        } catch (error) {
            if (error) {
                return next(CustomErrorHandler.serverError(err.message));
            }
        }
    },

    // Delete post
    async deletePost(req, res, next) {
        const post = await Posts.findById(req.params.id);
        try {
            await post.delete();
            res.status(200).json("Post has been deleted...");
        } catch (err) {
            if (err) {
                return next(CustomErrorHandler.serverError(err.message));
            }
        }
    },

    // Get post
    async getOnePost(req, res, next) {
        try {
            const post = await Posts.findById(req.params.id);
            res.status(200).json(post);
        } catch (err) {
            if (err) {
                return next(CustomErrorHandler.serverError(err.message));
            }
        }
    },

    //Get All Post
    async getAllPost(req, res, next) {
        const catName = req.query.cat;
        try {
            let posts;
            if (catName) {
                posts = await Posts.find({
                    category: {
                        $in: [catName],
                    },
                });
            } else {
                posts = await Posts.find();
            }
            res.status(200).json(posts);
        } catch (err) {
            if (err) {
                return next(CustomErrorHandler.serverError(err.message));
            }
        }
    },
}



export default postsController;