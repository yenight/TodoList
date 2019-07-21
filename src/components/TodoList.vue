<template>
    <div class="mainBox">
        <h1>{{msg}}</h1>
        <p>Simple Todo List with adding and filter by diff status</p>
        <input type="text" v-model="inputText"/>
        <button @click="clickAddButton">add</button>
    </div>
</template>

<script>
    export default {
        name: "TodoList",
        props: {
            msg: String
        },
        data: function () {
            return {
                inputText: ""
            }
        },
        methods: {
            clickAddButton: () => {

            }
        }
    }
</script>

<style scoped>
@import "../assets/css/publicStyle.css";
</style>