import { Post } from "./Post";
import { Role } from "./Role";

export interface User {
  id?: String;
  createdAt?: Date;
  email: String;
  name: String;
  role?: Role;
  posts?: Post[];
}