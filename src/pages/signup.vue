<template>
  <div>
    <h1>Signup</h1>
    <p>
      No, i have an account.
      <router-link :to="{name: 'login'}">Log in</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignupPage',
});
</script>
