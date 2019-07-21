<template>
    <div class="mainBox">
        <div class="todoListBox">
            <h1>{{msg}}</h1>
            <p>Simple Todo List with adding and filter by diff status</p>
            <input type="text" v-model="inputText"/>
            <button @click="clickAddButton">add</button>
        </div>
        <div v-for="item in todoItems" :key="item.index" class="todoItemsBox">
            <div class="todoItemIndex">
                {{item.index}}.
            </div>
            <div class="todoItem" v-if="item.index %2 !== 0">
                <input type="checkbox" :value="item.index">{{item.text}}
            </div>
            <div class="todoItemWithColor" v-else>
                <input type="checkbox" :value="item.index">{{item.text}}
            </div>
        </div>
        <div class="selectBox">
            <a @click="clickAll">All</a>
            <a @click="clickActive">Active</a>
            <a @click="clickComplete">Complete</a>
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
            },
            clickAll: function () {
                //console.log("1")
            },
            clickActive: function () {
                //console.log("2")
            },
            clickComplete: function () {
                //console.log("3")
            }
        }
    }
</script>

<style scoped>
@import "../assets/css/publicStyle.css";
</style>