<script setup lang="ts">
import Header from "./components/Header.vue";
import TodoItem from "./components/TodoItem.vue";
import Input from "./components/Input.vue";
import { useTodoStore } from "./stores/todo.store";
import { ref, Ref } from "vue";

const todoStore = useTodoStore();

const filter: Ref<"all" | "favs"> = ref("all");
</script>

<template>
  <div>
    <Header />
    <Input />
    <nav class="mx-auto flex justify-center mb-5 gap-x-4">
      <button
        :class="{ 'bg-pink-500': filter === 'all' }"
        class="px-4 py-2 rounded-lg border border-pink-500"
        @click="filter = 'all'"
      >
        All
      </button>
      <button
        :class="{ 'bg-pink-500': filter === 'favs' }"
        class="px-4 py-2 rounded-lg border border-pink-500"
        @click="filter = 'favs'"
      >
        Favs
      </button>
    </nav>

    <ul v-if="filter === 'all'" class="w-96 mx-auto flex flex-col gap-y-5">
      <li>Total all todos : {{ todoStore.totalCount }}</li>
      <TodoItem
        v-for="todo in todoStore.getTodos"
        :key="todo.id"
        :todo="todo"
      />
    </ul>

    <ul v-if="filter === 'favs'" class="w-96 mx-auto flex flex-col gap-y-5">
      <li>Total fav todos : {{ todoStore.favsCount }}</li>
      <TodoItem v-for="todo in todoStore.getFavs" :key="todo.id" :todo="todo" />
    </ul>

    <div class="flex justify-center">
      <button @click="todoStore.$reset" class="mt-4 mx-auto underline">
        Reset
      </button>
    </div>
  </div>
</template>
