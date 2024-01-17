import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsString, IsUUID } from 'class-validator';

@InputType()
export class CreateGuestInput {
  @IsString()
  @Field()
  cpf: string;

  @IsInt()
  @Field(() => Int)
  passengers: number;

  @IsUUID()
  @Field()
  personId: string;
}
