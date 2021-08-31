import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

import axios from 'axios';

@Controller('client')
export class ClientController {
  //   @Get('axios')
  //   public async getPets(@Res() response: Response) {
  //     const data = await this.knex('test').select('*');
  //     const requesPets: await axios.get;
  //     const dataCategory = await axios.get(
  //       'https://bsl1.herokuapp.com/pet/categories',
  //     );
  //     const category: IPetCategory = dataCategory.data;
  //     const petConjuntion = pet.map((pets) => {
  //       delete pets.id;
  //       pets.category = category.categories.find(
  //         (category) => category.id === pets.category,
  //       ).name;
  //       return pets;
  //     });
  //     return response.status(HttpStatus.OK).send({ petConjuntion });
  //   }

  @Get('axios')
  public async getPets(@Res() response: Response) {
    const datatPet = await axios.get('https://bsl1.herokuapp.com/pet');
    const pet: IPet[] = datatPet.data;
    const dataCategory = await axios.get(
      'https://bsl1.herokuapp.com/pet/categories',
    );
    const category: IPetCategory = dataCategory.data;

    const petConjuntion = pet.map((pets) => {
      delete pets.id;
      pets.category = category.categories.find(
        (category) => category.id === pets.category,
      ).name;
      return pets;
    });

    return response.status(HttpStatus.OK).send({ petConjuntion });
  }

  @Get('axios')
  public async getTask(@Res() response: Response) {
    const requesPets = await axios.get(
      'https://bsl1-proyect.herokuapp.com/pet',
    );
    const pets = requesPets.data.pets;
    const requestCategories = await axios.get(
      'https://bsl1-proyect.herokuapp.com/pet/categories',
    );
    const categorias = requestCategories.data.categorias;
    const petsWithCatName = pets.map((pet) => {
      delete pet.id;
    });
  }
}
