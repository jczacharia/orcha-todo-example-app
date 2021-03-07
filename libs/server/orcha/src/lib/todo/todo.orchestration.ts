import { TodoService } from '@orcha-todo-example-app/server/core/services';
import {
  CreateTodoDto,
  DeleteTodoDto,
  DeleteTodoQueryModel,
  ITodoOrchestration,
  OrchaTodoExampleAppOrchestrations,
  ReadTodosDto,
  Todo,
  TodoQueryModel,
  ToggleTodoDto,
  UpdateTodoDto,
} from '@orcha-todo-example-app/shared/domain';
import { IQuery } from '@orcha/common';
import { IServerOrchestration, ServerOperation, ServerOrchestration } from '@orcha/nestjs';

@ServerOrchestration(OrchaTodoExampleAppOrchestrations.todo)
export class TodoOrchestration implements IServerOrchestration<ITodoOrchestration> {
  constructor(private readonly todo: TodoService) {}

  @ServerOperation({ validateQuery: TodoQueryModel })
  async create(query: IQuery<Todo>, token: string, dto: CreateTodoDto) {
    return this.todo.create(query, token, dto);
  }

  @ServerOperation({ validateQuery: TodoQueryModel })
  async read(query: IQuery<Todo[]>, token: string, dto: ReadTodosDto) {
    return this.todo.read(query, token, dto);
  }

  @ServerOperation({ validateQuery: TodoQueryModel })
  async update(query: IQuery<Todo>, token: string, dto: UpdateTodoDto) {
    return this.todo.update(query, token, dto);
  }

  @ServerOperation({ validateQuery: TodoQueryModel })
  async toggle(query: IQuery<Todo>, token: string, dto: ToggleTodoDto) {
    return this.todo.toggle(query, token, dto);
  }

  @ServerOperation({ validateQuery: DeleteTodoQueryModel })
  async delete(query: IQuery<{ deletedId: string }>, token: string, dto: DeleteTodoDto) {
    return this.todo.delete(query, token, dto);
  }
}
