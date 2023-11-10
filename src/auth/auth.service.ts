import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import { Kysely } from 'kysely';
import { Database } from '../kysely/types';

@Injectable()
export class AuthService {
  constructor(@Inject('KYSELY_DB') private db: Kysely<Database>) {}
  async register(registerDto: RegisterDto) {
    console.log(333123, registerDto);
    const tes = await this.db
      .insertInto('user')
      .values(registerDto)
      .executeTakeFirst();
    return tes.numInsertedOrUpdatedRows;
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
