import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) { }

  async create(createUserInput: CreateUserInput) {
    return await this.usersRepository.save(createUserInput);
  }

  async findAll() {
    return await this.usersRepository.find({
      relations: {
        guests: true,
      },
    });
  }

  async findOne(username: string) {
    return await this.usersRepository.findOneOrFail({
      where: { username },
    });
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    const userUpdate = {
      updatedAt: new Date(),
      ...updateUserInput,
    };
    await this.usersRepository.update(id, userUpdate);
    return userUpdate;
  }

  async remove(id: string) {
    return await this.usersRepository.delete(id);
  }
}
