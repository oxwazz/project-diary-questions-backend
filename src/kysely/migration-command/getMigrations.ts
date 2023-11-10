import * as path from 'path';
import { Pool } from 'pg';
import { promises as fs } from 'fs';
import {
  Kysely,
  Migrator,
  PostgresDialect,
  FileMigrationProvider,
} from 'kysely';
import { Database } from '../types';

async function getMigrations() {
  const db = new Kysely<Database>({
    dialect: new PostgresDialect({
      pool: new Pool({
        host: 'localhost',
        database: 'example',
        user: 'example',
        password: 'example',
        port: 5433,
      }),
    }),
  });

  const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({
      fs,
      path,
      // This needs to be an absolute path.
      migrationFolder: path.join(__dirname, '../migration'),
    }),
  });

  const tes = await migrator.getMigrations();
  console.log(333444, tes);
  // results?.forEach((it) => {
  //   if (it.status === 'Success') {
  //     console.log(`migration "${it.migrationName}" was executed successfully`);
  //   } else if (it.status === 'Error') {
  //     console.error(`failed to execute migration "${it.migrationName}"`);
  //   }
  // });
  //
  // if (error) {
  //   console.error('failed to migrate');
  //   console.error(error);
  //   process.exit(1);
  // }
  //
  // await db.destroy();
}

getMigrations();
