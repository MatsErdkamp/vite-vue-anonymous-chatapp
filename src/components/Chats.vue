<template>
    <div class="welcome-container">
        <div class="gradient-orb"></div>

        <div class="screen-content">
            <div class="chat-header">
                <h2 class="chat-topic">Choose a chat partner</h2>
            </div>

            <div class="topics">
                <div :key="user" v-for="user, index in users">

                    <router-link :to="{ name: 'Chat', params: { id: index, user: user } }">
                        <div class="topic-item">
                            <div class="fake-image"></div>
                            <div class="text-container">
                                <div class="statement"> {{ user }}</div>
                                <div class="statement" style="color:grey; font-size: 0.8em;"> <i>{{
                                    statements[index]
                                }}</i></div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

        </div>
    </div>
</template>
    
<script setup>

const users = ['churrosforever', 'Masterchief', 'BookWorm', 'RockstarStatus', 'random_username', 'PlayfulPenguin', 'Blossom', 'SweetiePira']
const statements = ['loves sports', 'loves hockey', 'loves darts', 'feels neutral about sports', 'feels neutral about football', 'hates tennis', 'strongly dislikes sports', 'loves hockey', ]
</script>
    
<style scoped>
.chat-header {
    background: rgb(245, 245, 245);
    width: 100%;
    height: 120px;
    margin: 0;
    padding-top: 24px;
    border-bottom: 1px solid rgb(170, 179, 189);
    box-shadow: 0px 4px 8px -2px rgba(170, 179, 189, 0.527);
    position: sticky;
    top: 0;
    z-index: 10;
}


.statement {
    color: #2c3e50;
}

.text-container {
    height: 100%;
    padding: 24px 0;
    font-size: 0.9em;
    width: 70%;
    text-align: left;
    margin-left: 30%;

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