import { Query, Resolver } from '@nestjs/graphql';
import { Coffe } from './entities/coffe.entity';

@Resolver()
export class CoffeesResolver {
  @Query(() => [Coffe], { name: 'coffees' })
  findAll(): Coffe[] {
    return [];
  }
}
