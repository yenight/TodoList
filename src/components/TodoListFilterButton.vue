<template>
    <div class="selectBox">
        <a @click="clickAll">All</a>
        <a @click="clickActive">Active</a>
        <a @click="clickComplete">Complete</a>
    </div>
</template>

<script>
    export default {
        name: "TodoListFilterButton",
        data: function () {
            return {
                selectedButtonName: 'All'
            }
        },
        methods: {
            clickAll: function () {
                this.selectedButtonName = 'All'
                for (let i = 0; i < this.$store.state.todoItems.length; i++) {
                    this.$store.commit('changeItemShowStatus', {
                        index: i,
                        isShow: true
                    })
                }
            },
            clickActive: function () {
                this.selectedButtonName = 'Active'
                for (let i = 0; i < this.$store.state.todoItems.length; i++) {
                    this.$store.commit('changeItemShowStatus', {
                        index: i,
                        isShow: this.$store.state.todoItems[i].isSelected === false
                    })
                }
            },
            clickComplete: function () {
                this.selectedButtonName = 'Complete'
                for (let i = 0; i < this.$store.state.todoItems.length; i++) {
                    this.$store.commit('changeItemShowStatus', {
                        index: i,
                        isShow: this.$store.state.todoItems[i].isSelected === true
                    })
                }
            },
        }
    }
</script>

<style scoped>

</style>