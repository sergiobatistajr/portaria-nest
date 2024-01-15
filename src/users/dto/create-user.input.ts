import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, Length } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @Field()
  firstName: string;

  @IsString()
  @Field()
  lastName: string;

  @IsString()
  @IsEmail()
  @Field()
  email: string;

  @Length(8, 64)
  @IsString({
    message: 'Password must be a string',
  })
  @Field()
  password: string;

  @IsString()
  @Field()
  role: string;
}
