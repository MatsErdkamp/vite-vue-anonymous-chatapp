<template>
  <div class="welcome-container">
    <div class="gradient-orb"></div>

    <div class="screen-content">
      <h1>Category Questions {{ questionIndex }}</h1>

      <p>{{ questionList[questionIndex - 1] }}</p>

      <div style="width: 100%">
        <div class="likert-labels">
          <small>not at all</small>
          <small>neutral</small>
          <small>very</small>
        </div>
        <div class="likert-container">
          <div :key="i" v-for="i in [1, 2, 3, 4, 5]">
            <div
              class="likert-item"
              @click="activeItem = i"
              :class="{ active: activeItem == i }"
            >
              {{ i }}
            </div>
          </div>
        </div>
      </div>

      <div class="button-container">
        <button
          v-if="questionIndex > 1 && questionIndex < questionList.length"
          class="basic-outline-button"
          @click="changeQuestionIndex(-1)"
        >
          Back</button
        ><button v-if="questionIndex < questionList.length " class="basic-colored-button" @click="changeQuestionIndex(1)">
          Next question
        </button>
        <router-link to="/chats" v-if="questionIndex === questionList.length" class="basic-colored-button" >
          Finish questionnaire
        </router-link>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from "vue";

const activeItem = ref(3);
var questionIndex = ref(1);
const questionList = [
  "How interested are you in sports at competitive levels?",
];

function changeQuestionIndex(change) {

    questionIndex.value = Math.max(1, Math.min(questionList.length, questionIndex.value + change))
    activeItem.value = 0
}
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

.likert-labels {
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
}

.likert-labels small {
    width: 40px;
}

.likert-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.likert-item {
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgb(22, 120, 211);
  font-size: 1.5em;
  transition: all 200ms ease;
}

.likert-item:hover:not(.active) {
  background: rgb(22, 120, 211, 0.2);
}

.likert-item:active,
.liker-item:focus,
.active {
  color: white;
  background: rgb(22, 120, 211);
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
  padding: 10% 5%;
  z-index: 2;
  width: 100%;
}

.button-container {
  width: 100%;
  gap: 12px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
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
  flex-grow: 1;
}

.basic-outline-button {
  background: transparent;
  padding: 12px 16px;
  border-radius: 8px;
  outline: 0;
  border: 0;
  width: 80%;
  font-size: 1em;
  font-weight: 600;
  box-shadow: 0px 4px 8px -4px rgba(22, 120, 211, 0.8);
  border: 1px solid rgb(22, 120, 211);
  color: rgb(22, 120, 211);
}

.basic-colored-button:hover {
  outline: 5px solid rgba(22, 120, 211, 0.5);
}
</style>