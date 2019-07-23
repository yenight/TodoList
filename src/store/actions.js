import axios from './../api/config'

const actions = {
    getTodoItems ({ commit }) {
        return new Promise((resolve, reject) => {
            axios.get('/todos')
                .then(response => {
                    commit('getTodoItems', {todoItems: response.data})
                    resolve('get data success')
                })
                .catch(error => reject(error))
        })
    },
    addTodoItem ({ commit }, payload) {
        return new Promise((resolve, reject) => {
            axios.post('/todos', payload.item)
                .then(response => {
                    commit('addTodoItem', {item: response.data})
                    resolve('create data success')
                })
                .catch(error => reject(error))
        })
    },
    changeItemSelected ({ commit }, payload) {
        return new Promise( (resolve, reject) => {
            axios.patch(`/todos/${payload.id}`, payload.data)
                .then(response => {
                    commit('changeItemSelected', response.data)
                    resolve('update success')
                })
                .catch(error => reject(error))
        })
    },
    submitText ({ commit }, payload) {
        return new Promise( (resolve, reject) => {
            axios.patch(`/todos/${payload.id}`, payload.data)
                .then(response => {
                    commit('submitText', response.data)
                    resolve('update success')
                })
                .catch(error => reject(error))
        })
    },
    deleteItem ({commit}, payload) {
        return new Promise( (resolve, reject) => {
            axios.delete(`/todos/${payload.id}`)
                .then(response => {
                    commit('deleteItem', payload)
                    resolve('delete success')
                })
                .catch(error => reject(error))
        })
    }
}

export default actions