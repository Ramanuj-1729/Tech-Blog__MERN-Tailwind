import { Posts } from "../models";
import CustomErrorHandler from "../services/CustomErrorHandler";

const postsController = {
    async getAllPosts(req, res, next) {
        try {
            const posts = await Posts.findOne({ _id: req.posts._id }).select('-password -updatedAt -__v');
            if (!user) {
                return next(CustomErrorHandler.notFound());
            }
            res.json(posts);
        } catch (err) {
            return next(err);
        }
    }
};

export default postsController;