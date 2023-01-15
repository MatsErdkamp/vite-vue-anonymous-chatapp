<template>
  <div class="welcome-container">
    <div class="gradient-orb"></div>

    <div class="screen-content">
      <h1>Create an account</h1>

      <div >
        <span class="p-float-label">
          <InputText id="username" type="text" v-model="email" />
          <label for="username">Email</label>
        </span>
        <span class="p-float-label" style="margin-top:32px;">
          <InputText id="username" type="password" v-model="password" />
          <label for="username">Password</label>
        </span>
      </div>

      <router-link to="/likert" class="basic-colored-button">Sign up</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

</script>

<style scoped>
.gradient-orb {
  position: absolute;
  bottom: 0;
  transform: translate(-25%, 50%);
  left: 0;
  background: radial-gradient(rgba(22, 120, 211, 0.5), transparent 60%);
  height: 100%;
  width: 200%;
  z-index: 1;
}

.welcome-container {
  overflow: hidden;
  position: relative;
  height: inherit;
}

.screen-content {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90%;
  padding: 5%;
  z-index: 2;
  width: 100%;
}

.basic-colored-button {
  background: rgb(22, 120, 211);
  padding: 12px 16px;
  border-radius: 8px;
  outline: 0;
  border: 0;
  width: 80%;
  font-size: 1em;
  font-weight: 600;
  box-shadow: 0px 4px 8px -4px rgba(22, 120, 211, 0.8);
  color: white;
}

.basic-colored-button:hover {
  outline: 5px solid rgba(22, 120, 211, 0.5);
}
</style>