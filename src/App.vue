<template>
  <nav-bar></nav-bar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import NavBar from '@/components/NavBar.vue';

  import { defineComponent } from 'vue'

  export default defineComponent({
    components: {
      NavBar
    }
  });
</script>