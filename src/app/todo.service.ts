import { Injectable, signal, computed } from '@angular/core';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export type FilterType = 'all' | 'active' | 'completed';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // Private signal for todos
  private todos = signal<Todo[]>([]);
  
  // Public readonly signal (components can read but not directly modify)
  readonly todosSignal = this.todos.asReadonly();
  
  // Current filter
  private filter = signal<FilterType>('all');
  readonly filterSignal = this.filter.asReadonly();
  
  // Computed: filtered todos based on current filter
  readonly filteredTodos = computed(() => {
    const todos = this.todos();
    const currentFilter = this.filter();
    
    switch (currentFilter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  });
  
  // Computed: statistics
  readonly stats = computed(() => {
    const todos = this.todos();
    return {
      total: todos.length,
      completed: todos.filter(t => t.completed).length,
      active: todos.filter(t => !t.completed).length
    };
  });
  
  // Add a new todo
  addTodo(text: string): void {
    if (text.trim()) {
      const newTodo: Todo = {
        id: Date.now(), // Simple ID generation
        text: text.trim(),
        completed: false,
        createdAt: new Date()
      };
      this.todos.update(todos => [...todos, newTodo]);
    }
  }
  
  // Remove a todo
  removeTodo(id: number): void {
    this.todos.update(todos => todos.filter(todo => todo.id !== id));
  }
  
  // Toggle todo completion
  toggleTodo(id: number): void {
    this.todos.update(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  
  // Set filter
  setFilter(filter: FilterType): void {
    this.filter.set(filter);
  }
  
  // Clear all completed todos
  clearCompleted(): void {
    this.todos.update(todos => todos.filter(todo => !todo.completed));
  }
  
  // Mark all as complete/incomplete
  toggleAll(completed: boolean): void {
    this.todos.update(todos =>
      todos.map(todo => ({ ...todo, completed }))
    );
  }
}

