import { Injectable } from '@nestjs/common';
import { CreatePlanetDto } from './dto/create-planet.dto';
import { UpdatePlanetDto } from './dto/update-planet.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Planet } from "./entities/planet.entity";
import { Repository } from "typeorm";

@Injectable()
export class PlanetsService {
  constructor(
    @InjectRepository(Planet)
    private planetRepository: Repository<Planet>,
  ) {}
  async create(createPlanetDto: CreatePlanetDto) {
    return await this.planetRepository.save(createPlanetDto);
  }

  async findAll() {
    return await this.planetRepository.find();
  }

  async findOne(id: number) {
    return await this.planetRepository.findOneBy({ id });
  }

  async update(id: number, updatePlanetDto: UpdatePlanetDto) {
    return await this.planetRepository.update(id, updatePlanetDto);
  }

  async remove(id: number) {
    return await this.planetRepository.delete(id);
  }
}
