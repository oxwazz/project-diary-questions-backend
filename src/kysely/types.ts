import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from 'kysely';

export interface Database {
  user: UserTable;
  question: QuestionTable;
}

export interface UserTable {
  id: Generated<number>;
  name: string;
  email: string;
  password: string;
  created_at: ColumnType<Date, string | undefined, never>;
}

export type User = Selectable<UserTable>;
export type NewUser = Insertable<UserTable>;
export type UserUpdate = Updateable<UserTable>;

export interface QuestionTable {
  id: Generated<number>;
  name: string;
  description: string;
  user_id: number;
}

export type Question = Selectable<QuestionTable>;
export type NewQuestion = Insertable<QuestionTable>;
export type QuestionUpdate = Updateable<QuestionTable>;
