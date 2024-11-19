import prisma from "../db";

//Get all
export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: true,
    },
  });

  return res.status(200).json({ data: user.products });
};

//Get by id
export const getProductById = async (req, res) => {
  const product = await prisma.product.findFirst({
    where: {
      id: req.params.id,
      user_id: req.user.id,
    },
    include: {
      updates: true,
    },
  });

  return res.status(200).json({ data: product });
};

//Create product
export const createProduct = async (req, res) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      user_id: req.user.id,
    },
  });

  return res.status(201).json({ data: product });
};

//Update product
export const updateProduct = async (req, res) => {
  const updatedProduct = await prisma.product.update({
    where: {
      id: req.params.id,
    },
    data: {
      name: req.body.name,
    },
  });

  if (!updatedProduct) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.status(200).json({ data: updatedProduct });
};

//Delete product
export const deleteProduct = async (req, res) => {
  const deletedProduct = await prisma.product.delete({
    where: {
      id: req.params.id,
    },
  });

  if (!deletedProduct) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.status(200).json({ data: deletedProduct });
};
