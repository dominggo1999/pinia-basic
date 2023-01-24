<script setup lang="ts">
import type { Todo } from "../stores/todo.store";
import { useTodoStore } from "../stores/todo.store";

const todoStore = useTodoStore();

defineProps<{
  todo: Todo;
}>();
</script>

<template>
  <li
    class="flex justify-between items-center rounded-lg border-2 border-pink-500 px-4 py-3 text-xl"
  >
    <span>{{ todo.title }}</span>

    <div class="flex gap-x-2 items-center">
      <button
        @click="todoStore.deleteTodo(todo.id)"
        class="bg-pink-500 rounded-full flex items-center justify-center w-10 h-10"
      >
        x
      </button>

      <button
        @click="todoStore.toggleFav(todo.id)"
        class="bg-transparent border-2 border-pink-500 rounded-full flex items-center justify-center w-10 h-10"
      >
        {{ todo.isFav ? "❤️" : "" }}
      </button>
    </div>
  </li>
</template>
