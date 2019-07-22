<template>
    <div class="mainBox">
        <div class="todoListBox">
            <h1>{{msg}}</h1>
            <p>Simple Todo List with adding and filter by diff status</p>
            <input type="text" v-model="inputText"/>
            <button @click="clickAddButton">add</button>
        </div>
        <div v-for="(item,index) in showItems" :key="item.index" class="todoItemsBox">
            <div class="todoItemIndex">
                {{index + 1}}.
            </div>
            <div class="todoItem" v-if="(index+1) %2 !== 0" :style="styleObject[item.index - 1]">
                <input type="checkbox" :value="item.index" v-model="checkIndexs">
                <span v-if="!item.isEdited" @dblclick="editText(item.index)">{{item.text}}</span>
                <input type="text" v-focus @keyup.enter="submitText(item.index)" v-else v-model="editedText"/>
            </div>
            <div class="todoItemWithColor" v-else :style="styleObject[item.index - 1]">
                <input type="checkbox" :value="item.index" v-model="checkIndexs">
                <span v-if="!item.isEdited" @dblclick="editText(item.index)">{{item.text}}</span>
                <input type="text" v-focus @keyup.enter="submitText(item.index)" v-else v-model="editedText"/>
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
        directives: {
            focus: {
                // 指令的定义
                inserted: function (el) {
                    el.focus()
                }
            }
        },
        props: {
            msg: String
        },
        data: function () {
            return {
                inputText: "",
                todoItems: [],
                itemIndex: 0,
                checkIndexs: [],
                styleObject: [],
                editedText: '',
                selectedButtonName: 'All'
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
        computed: {
            showItems: function () {
                return this.todoItems.filter(function (item) {
                    return item.isShow
                })
            }
        },
        methods: {
            clickAddButton: function() {
                this.todoItems.push({
                    text: this.inputText,
                    index: ++this.itemIndex,
                    isShow: true,
                    isEdited: false
                })
                this.styleObject.push({
                    textDecoration: 'none'
                })
            },
            clickAll: function () {
                this.selectedButtonName = 'All'
                for (let i = 0; i < this.todoItems.length; i++) {
                    this.todoItems[i].isShow = true
                }
            },
            clickActive: function () {
                this.selectedButtonName = 'Active'
                for (let i = 0; i < this.styleObject.length; i++) {
                    this.todoItems[i].isShow = this.styleObject[i].textDecoration === 'none'
                }
            },
            clickComplete: function () {
                this.selectedButtonName = 'Complete'
                for (let i = 0; i < this.styleObject.length; i++) {
                    this.todoItems[i].isShow = this.styleObject[i].textDecoration === 'line-through'
                }
            },
            editText: function(index) {
                this.todoItems[index - 1].isEdited = true;
                this.editedText = this.todoItems[index - 1].text;

            },
            submitText: function (index) {
                this.todoItems[index - 1].text = this.editedText
                this.todoItems[index - 1].isEdited = false
                this.editedText = ''
            }
        }
    }
</script>

<style scoped>
@import "../assets/css/publicStyle.css";
</style>