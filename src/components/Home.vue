<template>
    <div class="layout">
        <Layout class="home">
            <Header>
                <Button @click="clickBack" type="primary" class="layout-header-button">返回</Button>
                <Modal
                        v-model="modalValue"
                        title="Warning"
                        @on-ok="modalOk"
                        @on-cancel="modalCancel">
                    <p>Do you want to exit?</p>
                </Modal>
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
    // import TodoList from "./TodoList";
    export default {
        name: "Home",
        // components: {TodoList},
        data: function () {
          return {
              modalValue: false,
              userName: this.$route.query.name
          }
        },
        mounted: function () {
            this.$router.push('/todo')
        },
        methods: {
            clickBack: function () {
                this.modalValue = true
                //alert('Do you want to exit?', )
            },
            modalOk: function () {
                this.$router.push('/main')
            },
            modalCancel: function () {
                console.log('666')
            },
            selectMenuItem(name) {
                name === '1'? this.$router.push('/todo') : this.$router.push('/myInfo')

            }
        }
    }
</script>

<style scoped>

</style>