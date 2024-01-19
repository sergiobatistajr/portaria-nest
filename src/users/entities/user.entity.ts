import { ObjectType, Field, HideField } from '@nestjs/graphql';
import { Guest } from 'src/guests/entities/guest.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToMany,
} from 'typeorm';

@Entity('users')
@ObjectType()
@Unique(['username'])
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
  role: string;

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

  @OneToMany(() => Guest, (guest) => guest.user)
  @Field(() => [Guest])
  guests: Guest[];
}
