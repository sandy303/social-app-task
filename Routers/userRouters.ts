import express, { Router } from 'express';
import createUser from '../Controller/cerateUsers'
import replaceUser from '../Controller/cerateUsers'
import updateUser from '../Controller/cerateUsers'
import getAllUsers from '../Controller/cerateUsers'
import getUser from '../Controller/cerateUsers'
import removeUser from '../Controller/cerateUsers'

const userRouters = Router();

userRouters.post("/users",createUser);
userRouters.put("/users/:id",replaceUser);
userRouters.patch("/users/:id",updateUser);
userRouters.get("/users",getAllUsers);
userRouters.get("/users/:id",getUser);
userRouters.delete("/users/:id",removeUser);

export default userRouters;