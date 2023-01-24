<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "../stores/todo.store";

const todoStore = useTodoStore();

const title = ref("");

const handleSubmit = () => {
  todoStore.addTodo(title.value);
  title.value = "";
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="py-4 flex justify-center">
    <input
      v-model="title"
      class="border-2 border-pink-500 rounded-lg px-3 py-2 text-xl bg-transparent"
      type="text"
      placeholder="Add new todo"
    />
  </form>
</template>
