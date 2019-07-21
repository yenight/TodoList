<template>
    <div class="mainBox">
        <div class="todoListBox">
            <h1>{{msg}}</h1>
            <p>Simple Todo List with adding and filter by diff status</p>
            <input type="text" v-model="inputText"/>
            <button @click="clickAddButton">add</button>
        </div>
        <div v-for="item in todoItems" :key="item.index" class="todoItemsBox">
            {{item.index}}.
            <input type="checkbox" :value="item.index">{{item.text}}
        </div>
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
                inputText: "",
                todoItems: [],
                itemIndex: 0
            }
        },
        methods: {
            clickAddButton: function() {
                this.todoItems.push({
                    text: this.inputText,
                    index: ++this.itemIndex
                })
            }
        }
    }
</script>

<style scoped>
@import "../assets/css/publicStyle.css";
</style>