import { Injectable } from '@nestjs/common';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person) private personRepository: Repository<Person>,
  ) { }

  async create(createPersonInput: CreatePersonInput) {
    return await this.personRepository.save(createPersonInput);
  }

  async findAll() {
    return await this.personRepository.find();
  }

  async findById(id: string) {
    return await this.personRepository.findOneOrFail({
      where: { id },
    });
  }

  async update(id: string, updatePersonInput: UpdatePersonInput) {
    return await this.personRepository.update(id, updatePersonInput);
  }

  async remove(id: string) {
    return await this.personRepository.delete(id);
  }
}
