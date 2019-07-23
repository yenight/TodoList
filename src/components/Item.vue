<template>
    <div>
        <Checkbox v-model="item.isSelected" @on-change="changeSelectedBox"></Checkbox>
        <span v-if="!isEdited && item.isSelected === false" @dblclick="editText(item.id)">{{item.text}}</span>
        <del v-else-if="!isEdited && item.isSelected === true" @dblclick="editText(item.id)">{{item.text}}</del>
        <input type="text" v-focus @keyup.enter="submitText(item.id)" v-else v-model="editedText"/>
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
                isEdited: false
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
                        .then(response => console.log(response))
                        .catch(error => console.log(error))
                    if (this.$store.state.currentTab === 'Active') {
                        this.$store.dispatch('changeItemShowStatus', {id: this.item.index - 1, data: {isShow: false}})
                            .then(response => console.log(response))
                            .catch(error => console.log(error))
                    }
                } else {
                    this.$store.dispatch('changeItemSelected', {id: this.item.id, data: {isSelected: false}})
                        .then(response => console.log(response))
                        .catch(error => console.log(error))
                    if (this.$store.state.currentTab === 'Complete') {
                        this.$store.dispatch('changeItemShowStatus', {id: this.item.id, data: {isShow: false}})
                            .then(response => console.log(response))
                            .catch(error => console.log(error))
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>