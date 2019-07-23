<template>
    <div class="itemBox">
        <div v-for="(item,index) in showItems" :key="index + 1" class="todoItemsBox">
            <div class="todoItemIndex">
                {{index + 1}}.
            </div>
            <div class="todoItem" v-if="(index+1) %2 !== 0">
                <Item :item="item"></Item>
            </div>
            <div class="todoItemWithColor" v-else>
                <Item :item="item"></Item>
            </div>
        </div>
    </div>
</template>

<script>
    import Item from './Item'
    export default {
        name: "TodoItem",
        mounted: function (){
            this.$store.dispatch('getTodoItems')
                .then(response => console.log(response))
                .catch(error => console.log(error))
        },
        components: {
            Item
        },
        computed: {
            showItems: function () {
                return this.$store.state.todoItems.filter(function (item) {
                    return item.isShow
                })
            }
        },
        data: function () {
            return {

            }
        },
        methods: {

        },
    }
</script>

<style scoped>

</style>