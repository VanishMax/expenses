<template>
  <div>
    <h1>Login</h1>
    <p>
      No, i don't have an account.
      <router-link :to="{name: 'signup'}">Sign up</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginPage',
});
</script>
