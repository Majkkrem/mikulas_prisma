import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { MikulasService } from './mikulas.service';
import { CreateMikulaDto } from './dto/create-mikula.dto';
import { UpdateMikulaDto } from './dto/update-mikula.dto';

@Controller('mikulas')
export class MikulasController {
  constructor(private readonly mikulasService: MikulasService) {}

  @Post()
  async create(@Body() createMikulaDto: CreateMikulaDto) {
    try {
      const result = await this.mikulasService.create(createMikulaDto);
      if (!result) {
        throw new HttpException('Creation failed', HttpStatus.BAD_REQUEST);
      }
      return result;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async findAll() {
    try {
      const result = await this.mikulasService.findAll();
      if (!result) {
        throw new HttpException('No records found', HttpStatus.NOT_FOUND);
      }
      return result;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.mikulasService.findOne(+id);
      if (!result) {
        throw new HttpException('Record not found', HttpStatus.NOT_FOUND);
      }
      return result;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMikulaDto: UpdateMikulaDto) {
    try {
      const result = await this.mikulasService.update(+id, updateMikulaDto);
      if (!result) {
        throw new HttpException('Update failed', HttpStatus.BAD_REQUEST);
      }
      return result;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const result = await this.mikulasService.remove(+id);
      if (!result) {
        throw new HttpException('Deletion failed', HttpStatus.BAD_REQUEST);
      }
      return result;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}