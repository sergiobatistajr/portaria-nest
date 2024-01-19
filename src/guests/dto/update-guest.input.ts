import { CreateGuestInput } from './create-guest.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGuestInput extends PartialType(CreateGuestInput) {
  @Field()
  id: string;
}
