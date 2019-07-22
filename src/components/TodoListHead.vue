<template>
    <div class="todoListBox">
        <h1>{{title}}</h1>
        <p>Simple Todo List with adding and filter by diff status</p>
        <input type="text" v-model="inputText"/>
        <button @click="clickAddButton">add</button>
    </div>
</template>

<script>
    export default {
        name: "TodoListHead",
        data: function () {
            return {
                title: 'jQuery To Do List',
                inputText: '',
                itemIndex: 0,
            }
        },
        methods: {
            clickAddButton: function() {
                this.$store.commit('addTodoItem', {
                    item: {
                        text: this.inputText,
                        index: ++this.itemIndex,
                        isShow: true,
                        isEdited: false,
                        isSelected: false
                    }
                })
                this.inputText = ''
            },
        }
    }
</script>

<style scoped>

</style>