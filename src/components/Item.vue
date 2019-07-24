<template>
    <div>
        <el-checkbox v-model="item.isSelected" @on-change="changeSelectedBox"></el-checkbox>
        <span v-if="!isEdited && item.isSelected === false" @dblclick="editText(item.id)">{{item.text}}</span>
        <del v-else-if="!isEdited && item.isSelected === true" @dblclick="editText(item.id)">{{item.text}}</del>
        <el-input type="text" v-focus @keyup.enter.native="submitText(item.id)" v-else v-model="editedText"/>
        <el-button type="error" @click="deleteItem" style="float: right;">delete</el-button>
    </div>
</template>

<script>
    export default {
        name: "item",
        props: {
            item: Object
        },
        directives: {
            focus: {
                // 指令的定义
                inserted: function (el) {
                    el.focus()
                }
            }
        },
        data: function () {
            return {
                editedText: '',
                isEdited: false,
                modalValue: false
            }
        },
        methods: {
            editText: function(id) {
                if (!this.item.isSelected) {
                    this.isEdited = true
                    this.editedText = this.item.text;
                }
            },
            submitText: function (id) {
                const self = this
                this.isEdited = false
                this.$store.dispatch('submitText', {id: id, data: {text: this.editedText}})
                    .then(response => self.editedText = '')
                    .catch(error => console.log(error))
            },
            changeSelectedBox: function (data) {
                if (data) {
                    this.$store.dispatch('changeItemSelected', {id: this.item.id, data: {isSelected: true}})
                        .then(response => {})
                        .catch(error => console.log(error))
                    if (this.$store.state.currentTab === 'Active') {
                        const self = this
                        this.$nextTick(function () {
                            self.$store.commit('changeItemShowStatus', {id: self.item.id, isShow: false})
                        })

                    }
                } else {
                    this.$store.dispatch('changeItemSelected', {id: this.item.id, data: {isSelected: false}})
                        .then(response => console.log(response))
                        .catch(error => console.log(error))
                    if (this.$store.state.currentTab === 'Complete') {
                        const self = this
                        this.$nextTick(function () {
                            self.$store.commit('changeItemShowStatus', {id: self.item.id, isShow: false})
                        })

                    }
                }
            },
            deleteItem: function () {
                const self = this
                this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$store.dispatch('deleteItem', {id: this.item.id})
                        .then(response => {
                            self.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                        })
                        .catch(error => console.log(error))

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
    }
</script>

<style scoped>

</style>