import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { Post } from "../../interfaces/Post";
import { User } from "../../interfaces/User";

export class CreatePostController {
  async handle(request: Request, response: Response) {
    const { authorId, published, title } = request.body;

    const post: Post = await prismaClient.post.create({
      data: {
        authorId,
        published,
        title
      },
    });

    return response.json(post);
  }
}