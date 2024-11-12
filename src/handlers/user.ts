import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

export const createUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password),
    },
  });

  const token = createJWT(user);

  return res.status(201).json({ token });
};

export const singinUser = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  const isPasswordValid = await comparePasswords(
    req.body.password,
    user.password
  );

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = createJWT(user);

  return res.status(200).json({ token });
};
