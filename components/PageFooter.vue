<template>

  <footer>{{text}}</footer>

</template>

<script>

  export default {
    name: 'PageFooter',
    props: ['text']
  }

</script>

<style scoped>

  footer {
    background-color: lightsalmon;
    height: 15px;
    padding-left: 10px;
    font-size: small;
  }

</style>
