<template>
  <section>
    <h2>Platinum</h2>
    <ul>
      <li v-for="sponsor in sponsors" 
        :key="sponsor.id"
        v-if="sponsor.level==='platinum'">
        <img :src='sponsor.logo'>
      </li>
    </ul>
    <h2>Gold</h2>
    <ul>
      <li v-for="sponsor in sponsors.filter((sponsor) => sponsor.level === 'gold')" 
        :key="sponsor.id">
        <img :src='sponsor.logo'>
      </li>
    </ul>
    <h2>Bronze</h2>
    <ul>
      <li v-for="sponsor in sponsors" 
        :key="sponsor.id"
        v-if="sponsor.level==='bronze'">
        <img :src='sponsor.logo'>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Sponsor",
  computed: {
    sponsors() {
      return this.$store.getters.getSponsors;
    }
  }
};
</script>

<style scoped>
section {
  background-color: lightgrey;
  padding: 10px;
  height: calc(100vh - 91px);
  overflow-y: auto;
}

ul {
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

li {
  flex: 0 0 300px;
}

h2 {
  border: thin solid red;
  padding: 0.3em;
  text-align: center;
  border-radius: 0.3em;
  color: white;
  background-color: blue;
}
</style>
