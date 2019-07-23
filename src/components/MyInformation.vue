<template>
    <div class="myInfo-div">
        <Avatar icon="ios-person" size="large" style="height: 100px; width: 100px"/>
        <div class="myInfo-input-div">
            Name:<Input v-model="userName" class="myInfo-input"/>
        </div>
        <div class="myInfo-input-div">
            Tel: <Input v-model="telphoneNumber" class="myInfo-input" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyInformation",
        data: function () {
            return {
                modalValue: false,
                userName: this.$route.query.name,
                telphoneNumber: ''
            }
        },
    }
</script>

<style scoped>

</style>