import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    tasks: new Array<any>(),
  },
  getters: {
    getTasks: state => state.tasks,
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
    add_task(state, task) {
      state.tasks.push(task);
    },
    delete_task(state, task) {
      const index = state.tasks.indexOf(task);
      state.tasks.splice(index, 1);
    }
  },
  actions: {
    add_task(context, task) {
      context.commit("add_task", task);
    },
    delete_task(context, task) {
      context.commit("delete_task", task);
    },
  },
})
