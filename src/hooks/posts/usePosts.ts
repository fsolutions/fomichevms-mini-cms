import axios from "axios";
import { ref, onMounted } from 'vue';
import type Post from "@/Types/Post";

export function usePosts(limit: Number) {
    const posts = ref<Post[]>([]);
    const totalPages = ref(0);
    const isPostsLoading = ref(true);

    const fetching = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: 1,
                    _limit: limit
                }
            });

            totalPages.value = Math.ceil(response.headers['x-total-count'] / limit);
            posts.value = response.data;
        } catch (e) {
            console.error('Can not load posts');
        } finally {
            isPostsLoading.value = false;
        }
    }

    onMounted(fetching)

    return {
        posts, isPostsLoading, totalPages
    }
}