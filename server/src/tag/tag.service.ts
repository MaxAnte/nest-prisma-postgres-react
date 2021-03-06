import { Injectable } from '@nestjs/common';
import { Tag as TagModel } from '@prisma/client';

import { PrismaService } from 'src/prisma/prisma.service';
import { TagDto } from './dot/Tag.dto';

@Injectable()
export class TagService {
  constructor(private readonly prismaService: PrismaService) {}

  async createTag(dto: TagDto) {
    return this.prismaService.tag.create({
      data: dto,
    });
  }

  async getTags(): Promise<TagModel[]> {
    return this.prismaService.tag.findMany();
  }

  async updateTag(id: number, tagDto: TagDto) {
    return this.prismaService.tag.update({ where: { id }, data: tagDto });
  }

  async deleteTag(id: number) {
    return this.prismaService.tag.delete({ where: { id } });
  }
}
