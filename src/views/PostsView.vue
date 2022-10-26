<template>
  <post-form
    @create="createPost"
  />
  <post-list
    :posts="posts"
    @remove="removePost"
   />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { usePosts } from "@/hooks/posts/usePosts";
import type Post from "@/Types/Post";

import PostForm from "@/components/Posts/PostForm.vue";
import PostList from "@/components/Posts/PostList.vue";

export default defineComponent({
  components: {
    PostForm,
    PostList
  },
  setup() {
      const {posts, totalPages, isPostsLoading} = usePosts(10);    

      const createPost = (post: Post) => {
        posts.value.unshift(post);
      }

      const removePost = (post: Post) => {
        posts.value = posts.value.filter((p: Post) => p.id !== post.id);
      }

      return { 
        posts,
        totalPages, 
        isPostsLoading,
        createPost,
        removePost
      }
    },
})
</script>