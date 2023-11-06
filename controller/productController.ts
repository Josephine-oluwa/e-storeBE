import { Response} from "express"
import productModel from "../model/productModel"
import { myStreamifier } from "../utils/stream"

export const createProduct = async (req: any, res: Response) => {
    try {
        const {title, rating, cost, QTYinStock} = req.body

        const product = await productModel.create({
            title,
            rating: parseInt(rating),
            cost: parseInt(cost),
            QTYinStock,
            image: await myStreamifier(req)
        })
        return res.status(201).json({
            message: "product has been successfully created",
            data: product,
        });
    } catch (error:any) {
        return res.status(404).json({
            message: "was not able to create product",
            data: error.message
        })
    }
}


export const findAllProducts = async (req: any, res: Response) => {
    try {
        const product = await productModel.find()

        return res.status(200).json({
            message: "All Products Found",
            data: product
        })
    } catch (error:any) {
        return res.status(404).json({
            message: "was not able to find all products",
            data: error.message
        })
    }
}


export const findOneProduct = async (req: any, res: Response) => {
    try {
       
        const {productId} = req.params;

        const product = await productModel.findById(productId)


        return res.status(200).json({
            message: "one Product  has been Found",
            data: product
        })
    } catch (error:any) {
        return res.status(404).json({
            message: "was not able to find one product",
            data: error.message
        })
    }
}


export const updateProductStock = async (req: any, res: Response) => {
    try {
       
        const {productId} = req.params;
        const {QTYPurchased} = req.body;

        const product = await productModel.findById(productId)

        if (product) {
            let viewProduct = await productModel.findByIdAndUpdate(
                productId,
               {QTYinStock: product.QTYinStock - QTYPurchased} ,
               {new: true}
            )
            return res.status(200).json({
                message: "one Product  has been Found",
                data: viewProduct
            })
        }
    } catch (error: any) {
        return res.status(404).json({
            message: "was not able to find one product",
            data: error.message
        })
    }
}
export const updateProductToggle = async (req: any, res: Response) => {
    try {
       
        const {productId} = req.params;
        const {toggle} = req.body;

        const product = await productModel.findById(productId)

        if (product) {
            let toggleView = await productModel.findByIdAndUpdate(
                productId,
                {toggle},
                {new: true}
            );
            return res.status(200).json({
                message: "one Product  has been Found",
                data: toggleView
            })
        }
    } catch (error: any) {
        return res.status(404).json({
            message: "was not able to find one product",
            data: error.message
        })
    }
}

