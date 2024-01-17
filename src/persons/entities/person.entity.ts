import { ObjectType, Field } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
export type PersonType = 'guest' | 'employee' | 'delivery';

@Entity()
@ObjectType()
export class Person {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  createdBy: string;

  @Column({
    type: 'enum',
    enum: ['guest', 'employee', 'delivery'],
    default: 'guest',
  })
  @Field()
  personType: PersonType;

  @Column({ default: new Date() })
  @Field()
  createdAt: Date;

  @Column({ default: new Date() })
  @Field()
  updatedAt: Date;
}
