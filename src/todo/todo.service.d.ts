import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateTodoDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, data: UpdateTodoDto): any;
    remove(id: number): any;
}
