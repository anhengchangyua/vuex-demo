<template>

  <div>

    <ul>
      <li :key="post.id" v-for="post in posts">
        <router-link :to="'post/' + post.id">{{ post.title }}</router-link>
      </li>
    </ul>

  </div>

</template>


<script>
  export default {
    name: 'home',
    computed: {
      posts() {
        return this.$store.state.post.all
      }
    }
  }
</script>
