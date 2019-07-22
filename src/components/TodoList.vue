<template>
    <div class="mainBox">
        <TodoListHead></TodoListHead>
        <TodoItem></TodoItem>
        <TodoListFilterButton></TodoListFilterButton>
    </div>
</template>

<script>
    import TodoListHead from './TodoListHead'
    import TodoItem from './TodoItem'
    import TodoListFilterButton from './TodoListFilterButton'
    export default {
        name: "TodoList",
        components: {TodoListFilterButton, TodoItem, TodoListHead},
        data: function () {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style>
@import "../assets/css/publicStyle.css";
</style>