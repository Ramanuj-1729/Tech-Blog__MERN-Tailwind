import Joi from 'joi';
import CommentsAndRatings from '../models/CommentsAndRatings';
import CustomErrorHandler from '../services/CustomErrorHandler';

const commentsAndRatingsController = {
    // create comment 
    async createComment(req, res, next) {

        const commentsAndRatingsSchema = Joi.object({
            postId: Joi.string().required(),
            rating: Joi.number().required(),
            userName: Joi.string().required(),
            email: Joi.string().email().required(),
            comment: Joi.string()
        });
        const { error } = commentsAndRatingsSchema.validate(req.body);
        if (error) {
            return next(error);
        }

        const { postId, rating, userName, email, comment } = req.body;
        let commentDocument;

        try {
            commentDocument = await CommentsAndRatings.create({
                postId,
                rating,
                userName,
                email,
                comment
            });

        } catch (err) {
            if (err) {
                return next(CustomErrorHandler.serverError(err.message));
            }
        }


        res.status(201).json(commentDocument);
    },

    //Get All Comments
    async getAllComments(req, res, next) {
        try {
            const comments = await CommentsAndRatings.find({ postId: req.params.id });
            res.status(200).json(comments);
        } catch (err) {
            if (err) {
                return next(CustomErrorHandler.serverError(err.message));
            }
        }
    },
}

export default commentsAndRatingsController;