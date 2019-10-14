<template>
  <v-layout row wrap>
    <v-flex xs8 offset-xs2 class="pa-4">
      <div class="pa-4 text-center">
        <h1>Dashboard</h1>
        <v-btn color="primary">Click me</v-btn>
      </div>
    </v-flex>
    <v-flex xs8 offset-xs2 class="pa4 title">
      <div>Cards</div>
    </v-flex>
    <v-flex
      xs8
      offset-xs2
      class="mt-3"
      id="carditems"
      v-for="(dataItem, index) in dataItems"
      :key="index"
    >
      <div class="pa-1 text-center">
        <carditem v-bind:data-item="dataItem" />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import carditem from "./carditem.vue";
export default {
  name: "dashboard",
  components: {
    carditem
  },
  data() {
    return {
      dataItems: [
        {
          id: 1,
          title: "Kaart 1",
          subtitle: "Hier komt de inhoud van kaart 1",
          amount: 20
        },
        {
          id: 2,
          title: "Kaart 2",
          subtitle: "Hier komt de inhoud van kaart 2",
          amount: 25
        },
        {
          id: 3,
          title: "Kaart 3",
          subtitle: "Hier komt de inhoud van kaart 3",
          amount: 18
        },
        {
          id: 4,
          title: "Kaart 4",
          subtitle: "Hier komt de inhoud van kaart 4",
          amount: 47
        },
        {
          id: 5,
          title: "Kaart 5",
          subtitle: "Hier komt de inhoud van kaart 5",
          amount: 0
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@mixin border {
  border: 1px solid gainsboro;
  border-radius: 8px;
}

// .flex {
//   @include border;
// }

#carditems {
  @include border;

  max-height: calc(100vh - 280px);
  overflow-y: auto;
}
</style>
