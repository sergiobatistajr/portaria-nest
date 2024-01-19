import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity('guests')
@ObjectType()
export class Guest {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  cpf: string;

  @Column({
    type: 'enum',
    enum: ['guest', 'deliveryman', 'employee'],
    default: 'guest',
  })
  @Field()
  guestType: string;

  @Column({ default: new Date() })
  @Field()
  createAt: Date;

  @Column({ default: new Date() })
  @Field()
  updatedAt: Date;

  @Column()
  @Field()
  userId: string;

  @ManyToOne(() => User, (user) => user.guests)
  @Field(() => User)
  user: User;
}
