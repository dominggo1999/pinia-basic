import { defineStore } from "pinia";

export interface Todo {
  id: number;
  isFav: boolean;
  title: string;
}

type Todos = Todo[];

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todos: [
      { id: 1, title: "buy some milk", isFav: false },
      { id: 2, title: "play Gloomhaven", isFav: true },
    ] as Todos,
  }),
  getters: {
    getTodos(): Todos {
      return this.todos;
    },
    getFavs(): Todos {
      return this.todos.filter((todo) => todo.isFav);
    },
    totalCount(): number {
      return this.todos.length;
    },
    favsCount(): number {
      return this.todos.filter((todo) => todo.isFav).length;
    },
  },
  actions: {
    addTodo(todoTitle: string) {
      this.todos.unshift({
        title: todoTitle,
        isFav: false,
        id: Math.floor(Math.random() * 10000000),
      });
    },
    toggleFav(id: number) {
      const todo = (this.todos as Todo[]).find((item) => item.id === id);
      if (todo) {
        todo.isFav = !todo.isFav;
      }
    },
    deleteTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
});
