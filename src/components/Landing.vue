<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Hello',
    data () {
      return {
        msg: 'This supersimple App just reads from a predermined csv file and shows some useful graphs'
      }
    }
  }
</script>