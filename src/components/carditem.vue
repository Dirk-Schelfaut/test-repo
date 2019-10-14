<template>
  <v-container class="my-2">
    <v-card
      v-bind:class="{ 'orange white--text': dataItem.amount < 10 }"
      flat
      :ripple="false"
      class="px-3 text-left"
      @click="onCardClick(dataItem)"
      v-bind="dataItem"
    >
      <v-layout row wrap class="pa-3">
        <v-flex xs12 md6 class="pa-3">
          <div class="caption">{{dataItem.title.toUpperCase()}}</div>
          <div>{{dataItem.subtitle}}</div>
        </v-flex>
        <v-flex xs12 md6 class="pa-3">
          <div class="caption">AANTAL</div>
          <div>
            {{dataItem.amount}} &nbsp; &nbsp; &nbsp;
            <span v-show="dataItem.amount === 0">UIT STOCK!</span>
            <span v-show="dataItem.amount < 10">DRINGEND BIJ BESTELLEN!</span>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "carditem",
  methods: {
    onCardClick(dataItem) {
      console.log(dataItem.id);
      dataItem.amount = Math.floor(Math.random() * 100);
    }
  },
  props: ["dataItem"]
};
</script>

<style lang="scss" scoped>
.v-card {
  cursor: pointer;
  border: 1px solid gainsboro;
  &:hover {
    background-color: lighten(lightsteelblue, 20%);
    color: darken(grey, 25%);
  }
}
</style>
