import { Entity, Column, PrimaryGeneratedColumn, JoinColumn } from "typeorm";

@Entity('users')
export class UserOrm {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

}


