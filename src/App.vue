<template>
  <div class="phone-container">
    <transition name="fade">
      <router-view style="height:100%"></router-view>
    </transition>
  </div>
</template>

<script setup>

</script>

<style>


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
