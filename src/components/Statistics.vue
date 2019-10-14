<template>
  <v-layout row wrap router>
    <v-flex xs8 offset-xs2 class="pa-4">
      <div class="pa-4 text-center">
        <h1>Statistieken</h1>
        <v-btn to="/" color="primary">Terug naar Dashboard</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "statistics",
  components: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
.flex {
  border: 1px solid gainsboro;
  border-radius: 8px;
}
</style>
