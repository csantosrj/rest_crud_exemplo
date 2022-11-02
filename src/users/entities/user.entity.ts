import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number
    @Column("varchar", {length: 250, nullable: false})
    "name":string
    @Column("varchar", {length: 250, nullable: false})
    "email":string
}
