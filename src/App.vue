<template>
  <div class="phone-container">
    

    <router-view style="height:100%" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

  </div>
</template>

<script setup>

</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease-in-out
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}


a {
  text-decoration: none;
}


.router-link-active {
  text-decoration: unset !important;

}

.router-link-active-exact {
  text-decoration: unset !important;
}


#app {

  text-align: center;
  color: #2c3e50;
}

html {
  background: rgba(240, 240, 240);
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none !important;
  overflow: hidden;
}

.phone-container {
  height: 90vh;
  width: 51vh;
  border-radius: 8px;
  margin: auto;
  margin-top: 5vh;
  border: 1px solid rgb(200, 200, 200);
  background: white;
  box-shadow: 0px 6px 12px -4px rgba(0, 0, 0, 0.3);
  z-index: 0;
}
</style>
