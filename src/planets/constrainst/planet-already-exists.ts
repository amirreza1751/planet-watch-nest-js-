import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Repository } from "typeorm";
import { Planet } from "../entities/planet.entity";

@ValidatorConstraint({ async: true })
export class PlanetAlreadyExistsConstraint implements ValidatorConstraintInterface {
  constructor(private planetRepository: Repository<Planet>) {}
  validate(name: string, args: ValidationArguments) {
    return this.planetRepository.findOneBy({ name }).then((planet) => {
      if (planet) {
        return false;
      }
      return true;
    });
  }
}

export function PlanetAlreadyExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: PlanetAlreadyExistsConstraint,
    });
  };
}