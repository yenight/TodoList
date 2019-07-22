<template>
    <div>
        <Checkbox v-model="item.isSelected" @on-change="changeSelectedBox"></Checkbox>
        <span v-if="!item.isEdited && item.isSelected === false" @dblclick="editText(item.index)">{{item.text}}</span>
        <del v-else-if="!item.isEdited && item.isSelected === true" @dblclick="editText(item.index)">{{item.text}}</del>
        <input type="text" v-focus @keyup.enter="submitText(item.index)" v-else v-model="editedText"/>
        <!--<input type="checkbox" :value="item.index" v-model="checkIndexes" @change="changeSelectedBox(item)">-->

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
                editedText: ''

            }
        },
        methods: {
            editText: function(index) {
                if (!this.item.isSelected) {
                    this.$store.commit('editItem', {
                        index: index - 1,
                        isEdited: true
                    })
                    this.editedText = this.$store.state.todoItems[index - 1].text;
                }

            },
            submitText: function (index) {
                this.$store.commit('submitText', {
                    index: index - 1,
                    isEdited: false,
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
                } else {
                    this.$store.commit('changeItemSelected', {
                        index: this.item.index - 1,
                        isSelected: false
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>