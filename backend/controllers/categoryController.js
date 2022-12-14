import Category from '../models/Category';
import CustomErrorHandler from '../services/CustomErrorHandler';

const categoryController = {
    // create category
    async createCategory(req, res, next) {
        const newCat = new Category(req.body);
        try {
            const savedCat = await newCat.save();
            res.status(200).json(savedCat);
        } catch (err) {
            if (err) {
                return next(CustomErrorHandler.serverError(err.message));
            }
        }
    },

    // get category
    async getCategory(req, res, next) {
        try {
            const cats = await Category.find();
            res.status(200).json(cats);
        } catch (err) {
            if (err) {
                return next(CustomErrorHandler.serverError(err.message));
            }
        }
    },
}

export default categoryController;