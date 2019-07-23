<template>
    <div>
        <div v-for="(item,index) in showItems" :key="item.index" class="todoItemsBox">
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