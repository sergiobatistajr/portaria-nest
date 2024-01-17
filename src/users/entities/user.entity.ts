import { ObjectType, Field, HideField } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export type UserRoleType = 'admin' | 'ghost' | 'user';

@Entity('users')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  username: string;

  @Column()
  @Field()
  @HideField()
  password: string;

  @Column({
    type: 'enum',
    enum: ['admin', 'user', 'ghost'],
    default: 'ghost',
  })
  @Field()
  role: UserRoleType;

  @Column({ default: true })
  @Field()
  @HideField()
  isActive: boolean;

  @Column({ default: new Date() })
  @Field()
  createAt: Date;

  @Column({ default: new Date() })
  @Field()
  updatedAt: Date;
}
