import { Injectable, NotFoundException } from "@nestjs/common";
import { DeepPartial, Repository } from "typeorm";

@Injectable()
export abstract class BaseService<T extends { id: number }, CreateDTO extends DeepPartial<T>, UpdateDTO extends DeepPartial<T>> {
  protected constructor(
    private repository: Repository<T>,
  ) {}

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<T> {
    const item = await this.repository.findOne({ where: { id: id as any} });

    if (!item) {
      throw new NotFoundException(`#${id} not found`);
    }

    return item;
  }

  async remove(id: number): Promise<void> {
    if (!id) {  // Проверка, что id определен и не равен нулю
      throw new Error('Invalid item ID');  // Выбрасывание ошибки, если id не соответствует корректному значению
    }
    await this.repository.delete(id);  // Если id прошел проверку, то операция удаления пользователя продолжается
  }

  async create(createItemDto: CreateDTO): Promise<T> {
    const newItem = this.repository.create(createItemDto);
    return this.repository.save(newItem);
  }

  async update(id: number, updateItemDto: UpdateDTO): Promise<T> {
    const item = await this.repository.findOne({ where: { id: id as any } });

    if (!item) {
      throw new NotFoundException(`#${id} not found`);
    }

    // Update fields in the item and save
    Object.assign(item, updateItemDto);
    return this.repository.save(item);
  }
}
