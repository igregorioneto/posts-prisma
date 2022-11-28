import { Router } from "express";
import { CreatePostController } from "./controllers/Post/CreatePostController";
import { FindAllPostController } from "./controllers/Post/FindAllPostController";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { FindAllUserController } from "./controllers/User/FindAllUserController";

const router = Router();

const createUser = new CreateUserController();
const findAllUser = new FindAllUserController();

const createPost = new CreatePostController();
const findAllPost = new FindAllPostController();

router.post("/user", createUser.handle);
router.get("/user", findAllUser.handle);


router.post("/post", createPost.handle);
router.get("/post", findAllPost.handle);

export { router };