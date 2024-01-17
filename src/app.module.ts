import { Module } from '@nestjs/common';
import { join } from 'node:path';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { PersonsModule } from './persons/persons.module';
import { Person } from './persons/entities/person.entity';
import { GuestsModule } from './guests/guests.module';
import { Guest } from './guests/entities/guest.entity';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'local_user',
      password: 'local_password',
      database: 'local_db',
      entities: [User, Person, Guest],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    PersonsModule,
    GuestsModule,
  ],
})
export class AppModule {}
