const mutations = {
    addTodoItem (state, payload) {
        state.todoItems.push(payload.item)
    },
    changeItemShowStatus (state, payload) {
        state.todoItems[payload.index].isShow = payload.isShow
    },
    changeItemSelected (state, payload) {
        state.todoItems[payload.index].isSelected = payload.isSelected
    },
    editItem (state, payload) {
        state.todoItems[payload.index].isEdited = payload.isEdited
    },
    submitText (state, payload) {
        state.todoItems[payload.index].isEdited = payload.isEdited
        state.todoItems[payload.index].text = payload.text
    }
}

export default mutations