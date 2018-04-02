<template>
  <section>
    <ul>
      <li v-for="speaker in speakers" 
        :key="speaker.id">
        <div>{{speaker.fullName}}</div>
        <div>{{speaker.tagLine}}</div>
        <div>{{speaker.sessions.length}}</div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Speaker",
  computed: {
    speakers() {
      return this.$store.getters.getSpeakers;
    }
  }
};
</script>

<style scoped>
section {
  background-color: lightgreen;
  padding: 10px;
  height: calc(100vh - 91px);
  overflow-y: auto;
}

ul {
  list-style-type: none;
}

li {
  display: flex;
}

li > div {
  flex: 0 0 200px;
}

li > div:nth-child(2) {
  flex: 0 0 600px;
}

li > div:nth-child(3) {
  flex: 0 0 75px;
}
</style>
