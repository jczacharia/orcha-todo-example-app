import { IOperation } from '@orcha/common';
import { CreateTodoDto, DeleteTodoDto, ReadTodosDto, ToggleTodoDto, UpdateTodoDto } from './todo.dtos';
import { Todo } from './todo.model';

export interface ITodoOrchestration {
  create: IOperation<Todo, CreateTodoDto>;
  read: IOperation<Todo[], ReadTodosDto>;
  update: IOperation<Todo, UpdateTodoDto>;
  toggle: IOperation<Todo, ToggleTodoDto>;
  delete: IOperation<{ deletedId: string }, DeleteTodoDto>;
}
