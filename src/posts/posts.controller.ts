import { Controller, Get, Post } from '@nestjs/common';

@Controller('posts')
export class PostsController {
    @Post()
    create(): string {
      return 'New post created'
    }
  
    @Get()
    getAllPosts(): string {
      return 'All posts retrieved'
    }
}
