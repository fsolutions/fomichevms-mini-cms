<template>
  <div class="posts">
    <div class="post" v-for="post in posts" :key="post.id">
      <post-item 
        :post="post"
        @remove="$emit('remove', post)"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from "vue";
  import type Post from "@/Types/Post";
  import PostItem from "./PostItem.vue"

  export default defineComponent({
    name: "PostList",
    components: {
      PostItem
    },
    props: {
      posts: {
        required: true,
        type: Array as PropType<Post[]>
      }
    },
    methods: {
    }
  });
</script>
