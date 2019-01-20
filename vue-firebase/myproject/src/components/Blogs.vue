<template>
  <div class="blogs">
    <h2>Blogs</h2>
    <input type="text" v-model="searchTerm" placeholder="Search Posts">
    <div v-for="post in filteredPosts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body | snippet }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Blogs',
  data(){
    return {
      blogTitle: 'Blogs',
      posts: [],
      searchTerm: ''
    }
  },
  computed: {
    filteredPosts(){
      return this.posts.filter(post => {
        return post.title.match(this.searchTerm)
      })
    }
  },
  methods: {
    changeTitle(){
      this.blogTitle = 'Amazing Blog Site'
    }
  },
  created(){
    alert('created hook')
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response.data)
      this.posts = response.data
    }).catch(err => {
      console.log(err)
    })
  },
  beforeCreate(){
    alert('beforeCreate hook')
  },
  beforeUpdate(){
    alert('beforeUpdate hook')
  }
}
</script>

<style>
</style>