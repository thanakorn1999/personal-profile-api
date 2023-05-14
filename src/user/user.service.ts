import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DuUser } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(DuUser)
    private usersRepository: Repository<DuUser>,
  ) {}

  get(): Promise<DuUser[]> {
    return this.usersRepository.find();
  }

  getDetails(id: number) {
    return this.usersRepository.findOne({ where: { id } });
  }

  findByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email } });
  }

  async create(createUserDto: any) {
    try {
      return await this.usersRepository.save(createUserDto);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        return {
          message: `duplicate value`,
        };
      } else {
        return { message: 'errr' };
      }
    }
  }

  update(updateUserDto: any, userId: number) {
    return this.usersRepository.update(userId, updateUserDto);

    // return 'asdasdasd';
  }

  delete(id: number) {
    // return this.usersRepository.delete(id);
    return this.usersRepository.delete(id);
  }
}
