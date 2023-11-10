import { Module } from '@nestjs/common';
import { Database } from './types'; // this is the Database interface we defined earlier
import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';

const dialect = new PostgresDialect({
  pool: new Pool({
    host: 'localhost',
    database: 'example',
    user: 'example',
    password: 'example',
    port: 5433,
    max: 10,
  }),
});

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.

const dbFactory = {
  provide: 'KYSELY_DB',
  useFactory: () => {
    return new Kysely<Database>({
      dialect,
    });
  },
};

@Module({
  providers: [dbFactory],
  exports: [dbFactory],
})
export class KyselyModule {}
