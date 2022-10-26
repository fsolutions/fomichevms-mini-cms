<template>
  <div class="navbar">
    <div @click="$router.push('/')">Главная</div>
    <div class="navbar__btns">
      <cms-button @click="$router.push('/posts')">Посты</cms-button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'nav-bar',
  });
</script>

<style scoped>
  .navbar {
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }
  .navbar__btns {
    margin-left: auto;
  }
</style>