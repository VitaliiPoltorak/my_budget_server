import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { BaseService } from './base.service';
import { DeepPartial } from "typeorm";

@Controller()
export abstract class BaseController<T extends { id: number }, CreateDTO extends DeepPartial<T>, UpdateDTO extends DeepPartial<T>> {
  protected constructor(
    private readonly service: BaseService<T, CreateDTO, UpdateDTO>,
  ) {}

  @Get()
  async findAll(): Promise<T[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<T> {
    return this.service.findOne(id);
  }

  @Post()
  async create(@Body() createDto: CreateDTO): Promise<T> {
    return this.service.create(createDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateDto: UpdateDTO): Promise<T> {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.service.remove(id);
  }
}
