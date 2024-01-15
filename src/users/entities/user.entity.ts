import { ObjectType, Field, HideField } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  @HideField()
  password: string;

  @Column()
  @Field()
  role: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: new Date() })
  @Field()
  createAt: Date;

  @Column({ default: new Date() })
  @Field()
  updatedAt: Date;
}
