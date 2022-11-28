import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { Post } from "../../interfaces/Post";

export class FindAllPostController {
  async handle(request: Request, response: Response) {
    const post: Post[] = await prismaClient.post.findMany();

    return response.json(post);
  }
}