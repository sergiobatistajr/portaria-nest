import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsUUID } from 'class-validator';
@InputType()
export class CreatePersonInput {
  @IsString()
  @Field()
  name: string;

  @IsUUID()
  @Field()
  createdBy: string;
}
