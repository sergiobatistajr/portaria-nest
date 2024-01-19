import { InputType, Field } from '@nestjs/graphql';
import { IsEnum, IsString, IsUUID } from 'class-validator';

@InputType()
export class CreateGuestInput {
  @IsString()
  @Field()
  name: string;

  @IsString()
  @Field()
  cpf: string;

  @Field()
  @IsEnum({
    Guest: 'guest',
    Deliveryman: 'deliveryman',
    Employee: 'employee',
  })
  guestType: string;

  @IsUUID()
  @Field()
  userId: string;
}
