import * as Yup from "yup";

export const ProductSchema = Yup.object({
  id: Yup.string(),
  title: Yup.string().required().default(""),
  description: Yup.string().default(""),
  price: Yup.number().positive().required().defined().default(0),
  category: Yup.string(),
  image: Yup.string(),
  rating: Yup.object({
    rate: Yup.number().integer().min(0).required().defined().default(0),
    count: Yup.number().integer().min(0).required().defined().default(0),
  })
});

export const AvailableProductSchema = ProductSchema;

export type Product = Yup.InferType<typeof ProductSchema>;
export type AvailableProduct = Yup.InferType<typeof AvailableProductSchema>;
