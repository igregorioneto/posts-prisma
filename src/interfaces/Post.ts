export interface Post {
  id?: Number;
  createdAt?: Date;
  updatedAt?: Date;
  published: Boolean;
  title: String;
  authorId: String;
}