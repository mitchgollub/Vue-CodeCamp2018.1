<template>
  <section>
    <div v-for="schedule in schedules" 
      :key="schedule.date">
      <h2>{{schedule.date.substring(5,10)}}</h2>
      <ul>
        <li v-for="room in schedule.rooms" 
          :key="room.id">
          <div class='room'>{{room.name}}</div>
          <ul>
            <li v-for="session in room.sessions" 
              :key="session.id">
              <div class='title'>{{session.title}}</div>
              <div class='speaker'>{{session.speakers[0].name}}</div>
              <div class='time'>{{session.startsAt.substring(11,16)}}</div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Schedule",
  computed: {
    schedules() {
      return this.$store.getters.getSchedules;
    }
  }
};
</script>

<style scoped>
section {
  background-color: lightblue;
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

.room {
  flex: 0 0 100px;
}

.title {
  flex: 0 0 500px;
}

.speaker {
  flex: 0 0 200px;
}
</style>
