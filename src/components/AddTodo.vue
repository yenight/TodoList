<template>
    <div>
        <input type="text" v-model="inputText"/>
        <button @click="clickAddButton">add</button>
    </div>
</template>

<script>
    export default {
        name: "AddTodo",
        data: function () {
            return {
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