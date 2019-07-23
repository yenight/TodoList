<template>
    <div>
        <Checkbox v-model="item.isSelected" @on-change="changeSelectedBox"></Checkbox>
        <span v-if="!isEdited && item.isSelected === false" @dblclick="editText(item.id)">{{item.text}}</span>
        <del v-else-if="!isEdited && item.isSelected === true" @dblclick="editText(item.id)">{{item.text}}</del>
        <input type="text" v-focus @keyup.enter="submitText(item.id)" v-else v-model="editedText"/>
        <Button type="error" @click="deleteItem" style="float: right;">delete</Button>
        <Modal
                v-model="modalValue"
                title="Warning"
                :mask-closable="false"
                @on-ok="modalOk">
            <p>Do you want to delete this item?</p>
        </Modal>
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
                    this.editedText = this.$store.state.todoItems[id - 1].text;
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
                this.modalValue = true
            },
            modalOk: function () {
                this.$store.dispatch('deleteItem', {id: this.item.id})
                    .then(response => console.log(response))
                    .catch(error => console.log(error))
            }
        }
    }
</script>

<style scoped>

</style>