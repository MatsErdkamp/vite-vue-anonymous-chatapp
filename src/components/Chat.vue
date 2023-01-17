<template>
    <div class="welcome-container">
        <div v-if="showPopup == true" class="screen-content">

            <div class="popup-content">
                <h2>Do you agree with their statement?</h2>

                <div class="input-parent">
                    <div style="display:flex; width: 100%; justify-content:space-between">
                        <small>disagree</small><small>agree</small>
                    </div>

                    <input type="range" min="1" max="100" value="50" style="width:80%" />
                </div>

                <button @click="showPopup = false" class="basic-colored-button"
                    style="max-height:40px; max-width: 50%; margin-top:24px">Confirm</button>
            </div>

        </div>
        <div v-else class="screen-content">
            <div class="chat-header">
                <h2 class="chat-topic">{{ $route.params.user }}</h2>
            </div>
            <div class="chat-header-statement">
                <h3 style="margin:0">I love darts</h3>
            </div>

            <div class="messages-container">
                <div :key="message" v-for="message in messages">

                    <div v-if="message.sender == 'you'" class="chat-bubble"> {{ message.message }}</div>
                    <div v-else class="chat-bubble-other"> {{ message.message }}</div>
                </div>
            </div>
            <div class="chat-footer"> <input v-model="textModel" class="type-field" /><button class="send-button"
                    @click="sendMessage()">Send</button> </div>
        </div>
    </div>
</template>
    
<script setup>
import { ref } from 'vue'

const showPopup = ref(true)
const textModel = ref('')

const users = ['statement 1', 'statement 2', 'statement 3', 'statement 4', 'statement 5', 'statement 6', 'statement 7', 'statement 8',]
const messages = ref([])


function sendMessage() {


    messages.value.push({ 'message': textModel.value, 'sender': 'you' })


    setTimeout(() => {
        messages.value.push({ 'message': 'hellooooooooooooo', 'sender': 'them' })
    }, 3000)


}


</script>
    
<style scoped>
.input-parent {
    width: 80%;
}

.popup-content {
    height: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 120px;
    flex-direction: column;
    margin-top: 200px;
}


.chat-bubble-other {
    background: rgb(104, 120, 136);
    color: white;
    padding: 16px;
    margin: 12px;
    border-radius: 8px 8px 8px 0px;
    margin-top: 16px;
    text-align: start;
    box-shadow: 0px 4px 8px -2px rgba(81, 92, 104, 0.527);
    width: 50%;
    margin-right: 45%;


}


.chat-bubble {
    background: rgb(22, 120, 211);
    color: white;
    padding: 16px;
    margin: 12px;
    border-radius: 8px 8px 0px 8px;
    margin-top: 16px;
    text-align: start;
    box-shadow: 0px 4px 8px -2px rgba(81, 92, 104, 0.527);
    width: 50%;
    margin-left: 45%;


}

.messages-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}


.chat-topic {
    margin: 0;
}

.type-field {
    width: 80%;
    border: none;
    border-radius: 20px;
    outline: unset;
    height: 40px;
    box-shadow: 0px 4px 8px -2px rgba(81, 92, 104, 0.527);
    ;
    padding: 12px;
    font-size: 1.1em;
}

.send-button {
    height: 40px;
    border-radius: 50%;
    background: rgb(22, 120, 211);
    border: none;
    font-weight: 600;
    margin-left: 12px;
    box-shadow: 0px 4px 8px -2px rgba(81, 92, 104, 0.527);
    ;
    color: white;
}


.chat-header {
    background: rgb(236, 236, 236);
    width: 100%;
    height: 80px;
    margin: 0;
    padding-top: 24px;
    border-bottom: 1px solid rgb(170, 179, 189);
    box-shadow: 0px 4px 8px -2px rgba(170, 179, 189, 0.527);
    ;
}


.chat-header-statement {
    background: rgb(247, 252, 255);
    width: 100%;
    margin: 0;
    padding: 4px;
    border-bottom: 1px solid rgb(170, 179, 189);
    box-shadow: 0px 4px 8px -2px rgba(170, 179, 189, 0.527);
    ;
}

.chat-footer {
    background: rgb(236, 236, 236);
    width: 100%;
    margin: 0;
    padding: 24px 0;
    border-top: 1px solid rgb(170, 179, 189);
    box-shadow: 0px 4px 8px -2px rgba(170, 179, 189, 0.527);

}



.statement {
    color: #2c3e50;
}

.text-container {
    height: 100%;
    padding: 24px 0;
    font-size: 0.9em;

}


.gradient-orb {
    position: absolute;
    top: 0;
    transform: translate(-25%, -50%);
    left: 0;
    background: radial-gradient(rgba(22, 120, 211, 0.2), transparent 60%);
    height: 100%;
    width: 200%;
    z-index: 1;
}

.topics {
    width: 100%;
    margin-top: 48px;
}

.topic-item {
    width: 100%;
    height: 128px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.4em;
    font-weight: 500;
    transition: 200ms ease outline;
    position: relative;
    border-top: 1px solid rgb(223, 223, 223);
}

.topic-item:hover {
    background: rgba(214, 214, 214, 0.2);
}


.fake-image {
    position: absolute;
    width: 64px;
    height: 64px;
    background: rgb(202, 202, 202);
    border-radius: 50%;
    top: 0;
    left: 0;
    margin: 24px;
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
    height: 100%;
    z-index: 2;
    width: 100%;
    overflow-y: scroll;
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

.p-progress-spinner-circle {
    stroke: grey !important;
}
</style>