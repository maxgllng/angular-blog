import { BlogPost } from '../models/blog-post';

const newPost = new BlogPost(
  'My First Blog Post',
  'https://example.com/image.jpg',
  'This is the content of the blog post.'
);

newPost.addLike();
newPost.addComment('Great post!');
console.log(newPost);
