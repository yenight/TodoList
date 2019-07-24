<template>
    <el-container class="home">
        <el-header style="background-color: #515a6e">
            <el-button @click="clickBack" type="primary" style="margin-top: 10px; float: left">返回</el-button>
            <div class="layout-header-user-div">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
                User: {{userName}}
            </div>
        </el-header>
        <el-container class="home-content">
            <el-aside hide-trigger class="home-sider">
                <el-menu default-active="1" style="height: 100%" :router="true">
                    <el-menu-item-group title="Menu">
                        <el-menu-item index="todo" >
                            <i class="el-icon-menu"></i>
                            <span slot="title">TodoList</span>
                        </el-menu-item>
                        <el-menu-item index="myInfo">
                            <i class="el-icon-setting"></i>
                            <span slot="title">My Information</span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Home",
        data: function () {
          return {
              modalValue: false,
              userName: this.$route.params.userName,
              circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          }
        },
        mounted() {
          console.log(this.$route.params)
        },
        methods: {
            clickBack: function () {
                this.$router.push({name: 'main'})
            }
        },
        beforeRouteLeave (to, from , next) {
            if (to.name === 'main') {
                const answer = window.confirm('Do you really want to leave?')
                if (answer) {
                    next()
                } else {
                    next(false)
                }
            } else {
                next(to.name)
            }
        }
    }
</script>

<style scoped>

</style>