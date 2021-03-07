import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@orcha-todo-example-app/api-interfaces';

@Component({
  selector: 'orcha-todo-example-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
