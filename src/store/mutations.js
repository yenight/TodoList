const mutations = {
    getTodoItems (state, payload) {
      state.todoItems = payload.todoItems
    },
    addTodoItem (state, payload) {
        state.todoItems.push(payload.item)
    },
    changeItemShowStatus (state, payload) {
        state.todoItems[payload.id - 1].isShow = payload.isShow
    },
    changeItemSelected (state, payload) {
        state.todoItems[payload.id - 1].isSelected = payload.isSelected
    },
    submitText (state, payload) {
        state.todoItems[payload.id - 1].text = payload.text
    },
    changeSelectButtonName (state, payload) {
        state.currentTab = payload.currentTab
    },
}

export default mutations