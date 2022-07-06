import IBaseCrud from "./IBaseCrud";
import { EntityTarget, getRepository } from 'typeorm'

export abstract class BaseRepository<T> implements IBaseCrud<T> {

    private readonly _repository;

    constructor(classEntity: EntityTarget<T>) {

        this._repository = getRepository(classEntity);

    }

    async save(entity: T): Promise<void> {

        await this._repository.save(entity);

    }

    async update(id: string, entity: T): Promise<boolean> {

        const updated = await this._repository.preload({
            id: id,
            ...entity
          });
      
          if (!updated) {
            throw new Error(`id: ${id} not found.`)
          }
      
          return this._repository.save(updated);
    }

    async delete(id: string): Promise<boolean> {

        const entity = await this._repository.findOne({ id });
        return this._repository.remove(entity);

    }

    async findAll(): Promise<T[]> {
        const allEntity: T[] = await this._repository.find();
        return allEntity;
    }

    async findOne(id: string): Promise<T> {

        const entity = await this._repository.findOne({ where: { id } })
        return entity;

    }


}