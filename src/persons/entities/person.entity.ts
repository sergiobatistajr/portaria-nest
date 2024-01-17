import { ObjectType, Field } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('persons')
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

  @Column({ default: new Date() })
  @Field()
  createdAt: Date;

  @Column({ default: new Date() })
  @Field()
  updatedAt: Date;
}
