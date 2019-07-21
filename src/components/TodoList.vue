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
            <div class="todoItem" v-if="item.index %2 !== 0" :style="styleObject[item.index - 1]">
                <input type="checkbox" :value="item.index" v-model="checkIndexs">
                <span>{{item.text}}</span>
            </div>
            <div class="todoItemWithColor" v-else :style="styleObject[item.index - 1]">
                <input type="checkbox" :value="item.index" v-model="checkIndexs">
                <span>{{item.text}}</span>
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
                itemIndex: 0,
                checkIndexs: [],
                styleObject: []
            }
        },
        watch: {
            checkIndexs: function (newValue, oldValue) {
                for (let i = 0; i < newValue.length; i++) {
                    this.styleObject[newValue[i] - 1].textDecoration = 'line-through'
                }
                for (let i = 0; i < oldValue.length; i++) {
                    if (newValue.indexOf(oldValue[i]) < 0) {
                        this.styleObject[oldValue[i] - 1].textDecoration = 'none'
                    }
                }
            }
        },
        methods: {
            clickAddButton: function() {
                this.todoItems.push({
                    text: this.inputText,
                    index: ++this.itemIndex
                })
                this.styleObject.push({
                    textDecoration: 'none'
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