import { PlanetAlreadyExists } from "../constrainst/planet-already-exists";

export class CreatePlanetDto {
  @PlanetAlreadyExists({
    message: 'Planet $value already exists. Choose another name.',
  })
  name: string;

  value: string;

  required: boolean;
}
