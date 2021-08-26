import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('ejemplo')
export class EjemploGetController {
  @Get()
  getProducts(
    @Query('EjemploGet1') EjemploGet1: number,
    @Query('EjemploGet2') EjemploGet2: number,
    @Query('EjemploGet3') EjemploGet3: number,
  ) {
    return {
      message: `EjemloGet1: ${EjemploGet1} EjemploGet2: ${EjemploGet2} EjemploGet3: ${EjemploGet3}`,
    };
  }

  @Delete(':queryEjemploDelete')
  delete(@Param('queryEjemploDelete') queryEjemploDelete: number) {
    return queryEjemploDelete;
  }

  @Post()
  create(@Body() payload: number) {
    return {
      message: 'Se creo informacion',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }
}
