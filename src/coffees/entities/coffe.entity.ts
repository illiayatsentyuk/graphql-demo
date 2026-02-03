import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Coffee model' })
export class Coffe {
  @Field(() => ID, { description: 'The id of the coffee' })
  id: number;
  name: string;
  brand: string;
  flavors: string[];
}
