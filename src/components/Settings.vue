<template>
  <v-layout row wrap>
    <v-flex xs8 offset-xs2 class="pa-4">
      <div class="pa-4 text-center">
        <h1>Instellingen</h1>
        <!-- <v-spacer></v-spacer> -->
        <v-btn to="/" color="primary">Terug naar Dashboard</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "settings",
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.flex {
  border: 1px solid gainsboro;
  border-radius: 8px;
}
</style>