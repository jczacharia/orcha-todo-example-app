import { IsString, IsUUID, IsBoolean } from 'class-validator';

export abstract class CreateTodoDto {
  @IsString()
  content!: string;

  @IsUUID()
  userId!: string;
}

export abstract class ReadTodosDto {
  @IsUUID()
  userId!: string;
}

export abstract class UpdateTodoDto {
  @IsString()
  content!: string;

  @IsUUID()
  todoId!: string;
}

export abstract class ToggleTodoDto {
  @IsBoolean()
  done!: boolean;

  @IsUUID()
  todoId!: string;
}

export abstract class DeleteTodoDto {
  @IsUUID()
  todoId!: string;
}
