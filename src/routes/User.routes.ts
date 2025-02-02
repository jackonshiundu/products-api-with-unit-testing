import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  loginUser,
  updateUser,
} from "../controllers/User.controller";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../utils/jwtUtils";

export const userRoutes = (router: express.Router) => {
  // Route for creating a new user
  router.post("/users/create", createUser);

  //   Route for logging in a user
  router.post("/users/login", loginUser);

  // Route for getting all users (only accessible by admin)
  router.get("/users/all", verifyTokenAndAdmin, getAllUsers);

  // Route for updating a user (protected, only account owner or admin)
  router.put("/users/update/:id", verifyTokenAndAuthorization, updateUser);

  // Route for deleting a user (protected, only accessible by admin)
  router.delete("/users/delete/:id", verifyTokenAndAuthorization, deleteUser);
};

export default userRoutes;
