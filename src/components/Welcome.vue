<template>
  <div class="welcome-container">
    <div class="gradient-orb"></div>

    <div class="screen-content">
      <h1>App Name</h1>

      <div>
        <p>
          [app name] is an anonymous chat app powered by artificial
          intelligence. Instead of talking to random people, you will be matched
          up with people similar to you!
        </p>
      </div>

      <router-link to="/login" class="basic-colored-button">Sign in</router-link>
    </div>
  </div>
</template>

<script>
export default {};
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
  height: 80%;
  padding: 10%;
  z-index: 2;
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