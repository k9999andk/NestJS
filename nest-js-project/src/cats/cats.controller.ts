import { CreateCatDto } from '../dto/create-cat.dto';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action return all cats';
  }
}
