import { Component, inject, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService, FilterType } from './todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todoService = inject(TodoService);
  newTodoText = '';

  filterTypes: FilterType[] = ['all', 'active', 'completed'];

  // Computed stats from service
  stats = this.todoService.stats;

  // Check if all todos are completed
  allCompleted = computed(() => {
    const todos = this.todoService.todosSignal();
    return todos.length > 0 && todos.every(todo => todo.completed);
  });

  addTodo(): void {
    if (this.newTodoText.trim()) {
      this.todoService.addTodo(this.newTodoText);
      this.newTodoText = '';
    }
  }

  removeTodo(id: number): void {
    this.todoService.removeTodo(id);
  }

  toggleTodo(id: number): void {
    this.todoService.toggleTodo(id);
  }

  setFilter(filter: FilterType): void {
    this.todoService.setFilter(filter);
  }

  clearCompleted(): void {
    this.todoService.clearCompleted();
  }

  toggleAll(): void {
    const allCompleted = this.allCompleted();
    this.todoService.toggleAll(!allCompleted);
  }
}

