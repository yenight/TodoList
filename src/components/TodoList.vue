<template>
    <div class="mainBox">
        <TodoTitle></TodoTitle>
        <AddTodo></AddTodo>
        <TodoItem></TodoItem>
        <TabGroup></TabGroup>
    </div>
</template>

<script>
    import TodoTitle from './TodoTitle'
    import TodoItem from './TodoItems'
    import TabGroup from './TabGroup'
    import AddTodo from "./AddTodo";
    export default {
        name: "TodoList",
        components: {AddTodo, TabGroup, TodoItem, TodoTitle},
        data: function () {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>
</style>