import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    yesterday: [
      {fam: "Белецкий", first_name: "Алексей", last_name: "Вячеславович", points: 2878, day_of_work: 160, eff: 0.86},
      {fam: "Ермаков", first_name: "Панкрат", last_name: "Яковович", points: 2279, day_of_work: 163, eff: 1.04},
      {fam: "Богданов", first_name: "Устин", last_name: "Петрович", points: 1840, day_of_work: 200, eff: 0.73},
      {fam: "Горшков", first_name: "Остап", last_name: "Ростиславович", points: 1818, day_of_work: 96, eff: 0.96},
      {fam: "Моисеев", first_name: "Осип", last_name: "Вадимович", points: 710, day_of_work: 188, eff: 1.10},
      {fam: "Шилов", first_name: "Корней", last_name: "Максович", points: 3458, day_of_work: 212, eff: 0.90},
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
