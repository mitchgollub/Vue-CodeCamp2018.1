<template>

  <section>
    <h1>{{slogan}}</h1>
  </section>

</template>

<script>
export default {
  name: "Camp",
  computed: {
    title() {
      return this.$store.getters.getTitle;
    }
  }
};
</script>

<style>
section {
  background-color: cyan;
  padding: 10px;
  height: calc(100vh - 91px);
}
</style>
