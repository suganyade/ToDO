import { TodoService } from './todo.service';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    create(body: any): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, body: any): any;
    remove(id: number): any;
}
