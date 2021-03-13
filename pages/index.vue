<template>
  <div>
    <h1>Hello world</h1>

    {{ hasToken }}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['hasToken'])
  }
}
</script>

<style>
</style>
