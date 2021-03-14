<template>
  <header>
    <a href="/">
      <img src="/expenses.png" alt="expenses">
    </a>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNav',
});
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

a {
  position: relative;
  color: #424567;
  font-size: 1.1em;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  white-space: nowrap;
}

img {
  height: 50px;
}
</style>
