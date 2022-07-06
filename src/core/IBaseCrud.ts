export default interface IBaseCrud<T>  {

    save(entity: T) : Promise<void>;

    update(id: string, entity: T) : Promise<boolean>;
    
    delete(id: string) : Promise<boolean>;

    findAll() : Promise<T[]>;

    findOne(id: string) : Promise<T>;


}