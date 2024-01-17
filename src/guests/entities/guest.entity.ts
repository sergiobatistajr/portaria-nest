import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Person } from 'src/persons/entities/person.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('guests')
@ObjectType()
export class Guest {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  cpf: string;

  @Column()
  @Field(() => Int)
  passengers: number;

  @OneToOne(() => Person)
  @JoinColumn()
  person: Person;
}
