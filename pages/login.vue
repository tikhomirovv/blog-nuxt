<template>
  <section class="container mx-auto my-8">

    <div v-if="$route.query.message" class="block bg-red-300 text-red-600 p-4 m-4 rounded">
      {{ $route.query.message }}
    </div>

    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text"
               placeholder="Username">
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
               id="password" type="password" placeholder="******************">
        <p class="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button @click.prevent="login" class="bg-indigo-800 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
          Sign In
        </button>
        <nuxt-link to="/" class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">Back to
          Home
        </nuxt-link>
        <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
          Forgot Password?
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'empty',
  methods: {
    login() {
      this.$store.dispatch('login')
      this.$router.push('/')
    }
  },
}
</script>
