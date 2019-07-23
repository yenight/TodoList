<template>
    <div>
        <Checkbox v-model="item.isSelected" @on-change="changeSelectedBox"></Checkbox>
        <span v-if="!isEdited && item.isSelected === false" @dblclick="editText(item.index)">{{item.text}}</span>
        <del v-else-if="!isEdited && item.isSelected === true" @dblclick="editText(item.index)">{{item.text}}</del>
        <input type="text" v-focus @keyup.enter="submitText(item.index)" v-else v-model="editedText"/>
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
            editText: function(index) {
                if (!this.item.isSelected) {
                    this.isEdited = true
                    this.editedText = this.$store.state.todoItems[index - 1].text;
                }
            },
            submitText: function (index) {
                this.isEdited = false
                this.$store.commit('submitText', {
                    index: index - 1,
                    text: this.editedText
                })
                this.editedText = ''
            },
            changeSelectedBox: function (data) {
                if (data) {
                    this.$store.commit('changeItemSelected', {
                        index: this.item.index - 1,
                        isSelected: true
                    })
                    if (this.$store.state.currentTab === 'Active') {
                        this.$store.commit('changeItemShowStatus', {
                            index: this.item.index - 1,
                            isShow: false
                        })
                    }
                } else {
                    this.$store.commit('changeItemSelected', {
                        index: this.item.index - 1,
                        isSelected: false
                    })
                    if (this.$store.state.currentTab === 'Complete') {
                        this.$store.commit('changeItemShowStatus', {
                            index: this.item.index - 1,
                            isShow: false
                        })
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>