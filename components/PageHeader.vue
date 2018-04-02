<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'Camp'}">Camp</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Schedule'}">Schedule</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Session'}">Session</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Speaker'}">Speaker</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Sponsor'}">Sponsor</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  height: 40px;
}

nav > ul > li {
  border: 0;
  background: #0271bc;
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  outline: 0;
  width: 5em;
  display: inline-block;
  margin-right: 10px;
}

nav > ul > li > a {
  text-decoration: none;
  color: white;
}
</style>
