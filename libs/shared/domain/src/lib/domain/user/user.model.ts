import { IOneToMany } from '@orcha/common';
import { Todo } from '../todo';

export interface User {
  id: string;
  password: string;
  dateCreated: Date;
  dateLastLoggedIn?: Date;
  todos: IOneToMany<User, Todo>;
}
