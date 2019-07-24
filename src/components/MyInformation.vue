<template>
    <div class="myInfo-div">
        <el-avatar :size="100" :src="circleUrl"></el-avatar>
        <div class="myInfo-input-div">
            Name:<el-input v-model="userName" class="myInfo-input"/>
        </div>
        <div class="myInfo-input-div">
            Tel: <el-input v-model="telphoneNumber" class="myInfo-input" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyInformation",
        data: function () {
            return {
                modalValue: false,
                userName: this.$route.params.name,
                telphoneNumber: '',
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            }
        }
    }
</script>

<style scoped>

</style>