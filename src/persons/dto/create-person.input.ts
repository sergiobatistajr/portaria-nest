import { InputType, Field } from '@nestjs/graphql';
import { PersonType } from '../entities/person.entity';
import { IsEnum, IsString, IsUUID } from 'class-validator';
enum PersonEnum {
  guest = 'guest',
  employee = 'employee',
  delivery = 'delivery',
}
@InputType()
export class CreatePersonInput {
  @IsString()
  @Field()
  name: string;

  @IsUUID()
  @Field()
  createdBy: string;

  @IsEnum(PersonEnum)
  @Field()
  personType: PersonType;
}
