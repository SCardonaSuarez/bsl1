import {
  Body,
  Controller,
  HttpStatus,
  Logger,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('pet')
export class PetController {
  @Post()
  public post(@Body() body: any, @Res() response: Response) {
    Logger.log(body);
    if (!body.name) {
      return response.status(HttpStatus.BAD_REQUEST).send({
        error: 'name is required',
      });
    }
    return response.status(HttpStatus.CREATED).send();

    // return { name: 'POST' };
  }
}
