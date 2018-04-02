<template>
  <section>
    <ul>
      <li v-for="session in sessions" 
        :key="session.id">
        <div>{{session.title}}</div>
        <div>{{session.speakers[0].name}}</div>
        <div>{{session.room}}</div>
        <div>{{session.startsAt.substring(11,16)}}</div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Session",
  computed: {
    sessions() {
      return this.$store.getters.getSessions;
    }
  }
};
</script>

<style scoped>
section {
  background-color: lightgoldenrodyellow;
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
  flex: 0 0 150px;
}

li > div:nth-child(1) {
  flex: 0 0 600px;
}

li > div:nth-child(3) {
  flex: 0 0 100px;
}

li > div:nth-child(4) {
  flex: 0 0 50px;
}
</style>
