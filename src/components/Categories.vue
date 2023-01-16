<template>
    <div class="welcome-container">
        <div class="gradient-orb"></div>
        <div class="screen-content">
            <h1>Chat topics</h1>
            <div class="topics">
                <router-link to="/chats/">
                    <div :key="topic" v-for="topic in topics">
                        <div class="topic-item">{{ topic }}</div>
                    </div>
                </router-link>
            </div>

        </div>
    </div>
</template>
    
<script setup>

const topics = ['Football', 'Golf', 'Rock music', 'Religion', 'Cooking']

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

.topics {
    width: 100%;

}

.topic-item {
    background: linear-gradient(rgb(22, 120, 211), rgb(22, 100, 190));
    width: 100%;
    height: 128px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px 0;
    color: white;
    font-size: 1.4em;
    font-weight: 500;
    box-shadow: 0px 4px 8px -2px rgba(22, 120, 211, 0.527);
    outline: 0px solid rgb(22, 120, 211);
    transition: 200ms ease outline;
}

.topic-item:hover {
    outline: 5px solid rgb(14, 65, 112);
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
    padding: 10% 5%;
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