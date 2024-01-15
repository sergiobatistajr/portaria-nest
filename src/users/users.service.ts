import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) { }

  async create(createUserInput: CreateUserInput) {
    return await this.userRepository.save(createUserInput);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(email: string) {
    return await this.userRepository.findOneOrFail({
      where: { email },
    });
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    const userUpdate = {
      updatedAt: new Date(),
      ...updateUserInput,
    };
    await this.userRepository.update(id, userUpdate);
    return userUpdate;
  }

  async remove(id: string) {
    return await this.userRepository.delete(id);
  }
}
