<template>
  <form @submit.prevent="submit" class="post-add-form">
    <div class="message">
      <label for="text">Полное описание</label>
      <cms-textarea 
        v-model="post.text"
        name="text"
      />
    </div>
    <div class="post-form-entry">
      <label for="title">Заголовок поста</label>
      <cms-input 
        :type="'text'"
        v-model="post.title"
        name="title"
        required
      />

      <label for="description">Краткое описание</label>
      <cms-textarea 
        v-model="post.description"
        name="description"
        required
      />

      <label for="img">Приложить скриншот/фото/картинку</label>
      <cms-input 
        :type="'text'"
        v-model="post.img"
        name="img"
      />

      <label for="link">Внешняя ссылка</label>
      <cms-input 
        :type="'text'"
        v-model="post.link"
        name="link"
      />

      <hr class="mt-3 mb-4" />
      <div class="text-right">
        <cms-button
          type="submit"
        >Сохранить</cms-button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import type Post from "@/Types/Post";

  export default defineComponent({
    name: "PostForm",
    components: { },
    setup(props, { emit }) {
      const post = ref<Post>({
          // id: 0,
          title: 'New post title',
          description: 'New post Descr',
          text: '',
          img: '',
          link: ''  
        })

      const submit = () => {
        emit("create", post.value);
      }

      return { 
        post, 
        submit 
      }
    },
  });
</script>
