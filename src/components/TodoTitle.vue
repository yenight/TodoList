<template>
    <div class="todoListBox">
        <h1>{{title}}</h1>
        <p>Simple Todo List with adding and filter by diff status</p>
    </div>
</template>

<script>
    export default {
        name: "TodoListHead",
        data: function () {
            return {
                title: 'jQuery To Do List'
            }
        }
    }
</script>

<style scoped>

</style>