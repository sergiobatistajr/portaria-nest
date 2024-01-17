import { Injectable } from '@nestjs/common';
import { CreateGuestInput } from './dto/create-guest.input';
import { UpdateGuestInput } from './dto/update-guest.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Guest } from './entities/guest.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GuestsService {
  constructor(
    @InjectRepository(Guest) private guestsRepository: Repository<Guest>,
  ) {}
  async create(createGuestInput: CreateGuestInput) {
    return await this.guestsRepository.save(createGuestInput);
  }

  async findAll() {
    return await this.guestsRepository.find();
  }

  async findOne(id: string) {
    return await this.guestsRepository.findOneOrFail({ where: { id } });
  }

  async update(id: string, updateGuestInput: UpdateGuestInput) {
    return await this.guestsRepository.update(id, updateGuestInput);
  }

  async remove(id: string) {
    return await this.guestsRepository.delete(id);
  }
}
