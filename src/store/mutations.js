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
    submitText (state, payload) {
        state.todoItems[payload.index].text = payload.text
    },
    changeSelectButtonName (state, payload) {
        state.currentTab = payload.currentTab
    }
}

export default mutations