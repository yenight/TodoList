<template>
    <div class="layout">
        <Layout class="home">
            <Header>
                <Button @click="clickBack" type="primary" class="layout-header-button">返回</Button>
                <div class="layout-header-user-div">
                    <Avatar icon="ios-person" size="large" />
                    User: {{userName}}
                </div>
            </Header>
            <Layout class="home-content">
                <Sider hide-trigger class="home-sider">
                    <Menu theme="light" active-name="1" style="height: 100%" @on-select="selectMenuItem">
                        <MenuGroup title="Menu">
                            <MenuItem name="1" >
                                <Icon type="md-document" />
                                TodoList
                            </MenuItem>
                            <MenuItem name="2">
                                <Icon type="md-chatbubbles" />
                                My Information
                            </MenuItem>
                        </MenuGroup>
                    </Menu>
                </Sider>
                <router-view></router-view>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data: function () {
          return {
              modalValue: false,
              userName: this.$route.params.userName
          }
        },
        mounted() {
          console.log(this.$route.params)
        },
        methods: {
            clickBack: function () {
                this.$router.push({name: 'main'})
            },
            selectMenuItem(name) {
                name === '1'? this.$router.push('/todo') : this.$router.push({name: 'myInfo', params: {name: this.userName}})
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