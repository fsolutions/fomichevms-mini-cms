<template>
  <div class="one-post">
    <div class="post-name">{{ post.title }}</div>
    <div class="post-description">{{ post.description }}</div>
    <div class="post-delete" @click="$emit('remove', post)">&#10799;</div>
  </div>
</template>

<script lang="ts">
  import type Post from "@/Types/Post";
  import { defineComponent, PropType } from "vue";

  export default defineComponent({
    name: 'PostItem',
    props: {
      post: {
        required: true,
        type: Object as PropType<Post>
      }
    }
  })
</script>

<style scope>
  .one-post {
    position: relative;
    border: 1px solid hsla(160, 100%, 37%, 1);
    padding: 15px;
    margin: 5px 0;
  }
  .post-name {
    font-weight: bold;
  }
  .post-description {
    margin-top: 4px;
  }
  .post-delete {
    position: absolute;
    top: -5px;
    right: 10px;
    cursor: pointer;
    font-size: 1.3rem;
    color: rgb(73, 66, 66)
  }
  .post-delete:hover {
    color: red;
  }
</style>