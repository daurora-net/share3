<template>
  <ul>
    <!-- <li class="post_list" v-for="user in users" :key="user.id">
      {{ user.name }}
    </li> -->
    <li class="post_list" v-for="post in posts" :key="post.id">
      {{ post.content }}
    </li>
  </ul>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      // users: [],
      posts: []
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/posts')
      .then(response => this.posts = response.data);
  }
}
</script>