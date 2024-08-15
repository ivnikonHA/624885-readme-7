import { Module } from '@nestjs/common';
import { BlogPostFactory } from './post.factory';
import { BlogPostRepository } from './post.repository';
import { BlogPostController } from './post.controller';
import { BlogPostService } from './post.service';
import { PrismaClientModule } from '@project/blogs-models';
import { BlogTagModule } from '@blogs/tag';

@Module({
  imports: [PrismaClientModule, BlogTagModule],
  controllers: [BlogPostController],
  providers: [BlogPostFactory, BlogPostRepository, BlogPostService],
  exports: [BlogPostService]
})
export class BlogPostModule {}
