<template>
  <section>
    <h1>{{ pageTitle }}</h1>

    <ul>
      <li v-for="user of users" :key="user.id">
        <a href="#" @click.prevent="openUser(user)">{{ user.name }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  async fetch({store}) {
    if (store.getters['users/users'].length === 0) {
      await store.dispatch('users/fetch')
    }
  },
  data: () => ({
    pageTitle: 'Users'
  }),
  computed: {
    ...mapGetters('users', ['users']),
  },
  methods: {
    openUser(user) {
      this.$router.push('/users/' + user.id)
    },
  }
}
</script>
