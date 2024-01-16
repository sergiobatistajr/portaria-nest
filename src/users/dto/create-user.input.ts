import { InputType, Field } from '@nestjs/graphql';
import { IsString, Length } from 'class-validator';
import { UserRoleType } from '../entities/user.entity';

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

  @IsString()
  @Field()
  role: UserRoleType;
}
