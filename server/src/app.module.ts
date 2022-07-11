import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PostModule } from './post/post.module';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { CategoryModule } from './category/category.module';
import { BannedUserModule } from './banned-user/banned-user.module';
import { CategoryController } from './category/category.controller';
import { BannedUserController } from './banned-user/banned-user.controller';
import { CategoryService } from './category/category.service';
import { BannedUserService } from './banned-user/banned-user.service';
import { TagController } from './tag/tag.controller';
import { TagService } from './tag/tag.service';
import { TagModule } from './tag/tag.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [
    UserController,
    PostController,
    CategoryController,
    BannedUserController,
    TagController,
  ],
  providers: [
    PrismaService,
    UserService,
    PostService,
    CategoryService,
    BannedUserService,
    TagService,
  ],
  imports: [
    PrismaModule,
    UserModule,
    PostModule,
    CategoryModule,
    BannedUserModule,
    TagModule,
    AuthModule,
  ],
})
export class AppModule {}
