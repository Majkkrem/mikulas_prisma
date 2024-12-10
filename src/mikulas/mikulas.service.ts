import { Injectable } from '@nestjs/common';
import { CreateMikulaDto } from './dto/create-mikula.dto';
import { UpdateMikulaDto } from './dto/update-mikula.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MikulasService {
  db:PrismaService;
  constructor(db:PrismaService){
    this.db=db;
  }
  create(createMikulaDto: CreateMikulaDto) {
    return this.db.childrenData.create({
      data: createMikulaDto
    });
  }

  findAll() {
    return this.db.childrenData.findMany();
  }

  findOne(id: number) {
    return this.db.childrenData.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: number, updateMikulaDto: UpdateMikulaDto) {
    return this.db.childrenData.update({
      where: {
        id: id
        },
        data: updateMikulaDto
        });

  }

  remove(id: number) {
    return this.db.childrenData.delete({
      where: {
        id: id
      }
      });
  }
}
