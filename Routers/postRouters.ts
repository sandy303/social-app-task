import express, { Router } from 'express';
import createPost from '../Controller/createPosts'
import replacePost from '../Controller/createPosts'
import getAllPosts from '../Controller/createPosts'
import removePost from '../Controller/createPosts'
import getUserOfPost from '../Controller/createPosts'

const Prouter = Router();

Prouter.post("/posts",createPost);
Prouter.put("/posts/:id",replacePost);
Prouter.get("/posts",getAllPosts);
Prouter.delete("/posts/:id",removePost);
Prouter.get("/posts/?id=<id>",getUserOfPost);

export default Prouter;