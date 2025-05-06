import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
    @Post()
    createPost(@Body() createPostDto: CreatePostDto): string {
      console.log(createPostDto)
      return 'New post created'
    }
  
    @Get()
    getAllPosts(): string {
      return 'All posts retrieved'
    }

    @Get(':id')
    getPostById(@Param('id', ParseIntPipe) id: number) {
      return `Post ID - ${id}`
    }

    @Put(':id')
    updatePost(
      @Param('id') id: string,
      @Body() updatePostDto: UpdatePostDto
    ) {
      console.log(updatePostDto)
      return `ID of updatet post - ${id}`
    }
  
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    removePost(@Param('id') id: string) {
      return ''
    }
    
}
