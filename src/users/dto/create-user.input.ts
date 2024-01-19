import { InputType, Field } from '@nestjs/graphql';
import { IsEnum, IsString, Length } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @Field()
  name: string;

  @IsString()
  @Field()
  username: string;

  @Length(8, 64)
  @IsString({
    message: 'Password must be a string',
  })
  @Field()
  password: string;

  @IsEnum({
    User: 'user',
    Admin: 'admin',
    Ghost: 'ghost',
  })
  @Field()
  role: string;
}
