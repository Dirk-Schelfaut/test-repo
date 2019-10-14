<template>
  <v-app>
    <v-content>
      <v-tabs centered router class="mb-4">
        <v-tab to="/">Dashboard</v-tab>
        <v-tab to="/settings">Instellingen</v-tab>
        <v-tab to="/statistics">Statistieken</v-tab>
      </v-tabs>
      <transition name="view">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  })
};
</script>

<style lang="scss" scoped>
$value: 3em;

* {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}

.container {
  margin: $value;
  display: block;
  margin: 0 auto;
  border: 1px solid gainsboro;
  border-radius: 8px;

  & > div {
    display: flex;
    justify-items: center;
  }
}

#app {
  background: #fafafa;
}

.page {
  width: 100%;
  max-width: 768px;
  padding: 15px;
  box-sizing: border-box;
}

.view-enter-active,
.view-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.1s ease;
}

.view-enter-active {
  transition-delay: 0.25s;
}
.view-enter,
.view-leave-to {
  opacity: 0;
}

.view-enter-to,
.view-leave {
  opacity: 1;
}
</style>
