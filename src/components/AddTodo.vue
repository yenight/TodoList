<template>
    <div class="addTodo">
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
            }
        },
        methods: {
            clickAddButton: function() {
                const item = {
                    text: this.inputText,
                    isShow: true,
                    isSelected: false
                }
                const self = this
                this.$store.dispatch('addTodoItem', {item: item})
                    .then(response => {
                        console.log(response)
                        self.inputText = ''
                    })
                    .catch(error => console.log(error))
            },
        }
    }
</script>

<style scoped>

</style>