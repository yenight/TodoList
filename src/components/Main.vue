<template>
    <div class="main-div">
        <p>TodoLists</p>
        <div class="main-div-input">
            name: <el-input placeholder="please input your name" v-model="textValue" style="width: 70%"/>
        </div>
        <div class="main-div-button">
            <el-button @click="clickStarted"  type="primary">begin start</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data: function() {
            return {
                textValue: ''
            }
        },
        methods: {
                clickStarted: function () {
                this.$router.push({name: 'todo', params: {userName: this.textValue}})
            }
        }
    }
</script>

<style>
</style>