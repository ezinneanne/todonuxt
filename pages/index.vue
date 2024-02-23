<template>
    <div>
        <p>Page visits: {{ pages }}</p>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';
  
  const pages = ref();

  onMounted(async () => {
  const { result: query } = await useFetch('/api/query');
  pages.value = query;
});

  </script>
  
  <style scoped></style>
  