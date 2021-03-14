<template>
  <div>
    <AppNav />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppNav from './components/nav.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppNav,
  },
});
</script>
