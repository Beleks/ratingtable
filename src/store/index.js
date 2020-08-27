import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    get_mas: {
      previousValue: [
        { idstaff: 1001, depart: "219", fam: "Белецкий", first_name: "Алексей", last_name: "Вячеславович", points: 2878, day_of_work: 160, eff: 0.86, },
        { idstaff: 1002, depart: "219", fam: "Ермаков", first_name: "Панкрат", last_name: "Яковович", points: 2279, day_of_work: 163, eff: 1.04 },
        { idstaff: 1003, depart: "220", fam: "Богданов", first_name: "Устин", last_name: "Петрович", points: 1840, day_of_work: 200, eff: 0.73 },
        { idstaff: 1004, depart: "220", fam: "Горшков", first_name: "Остап", last_name: "Ростиславович", points: 1818, day_of_work: 96, eff: 0.96 },
        { idstaff: 1005, depart: "221", fam: "Моисеев", first_name: "Осип", last_name: "Вадимович", points: 710, day_of_work: 188, eff: 1.10 },
        { idstaff: 1006, depart: "222", fam: "Шилов", first_name: "Корней", last_name: "Максович", points: 3458, day_of_work: 212, eff: 0.90 },
      ],
      lastValue: [
        { idstaff: 1001, depart: "219", fam: "Белецкий", first_name: "Алексей", last_name: "Вячеславович", points: 2700, day_of_work: 166, eff: 0.79, },
        { idstaff: 1002, depart: "219", fam: "Ермаков", first_name: "Панкрат", last_name: "Яковович", points: 2301, day_of_work: 166, eff: 1.20 },
        { idstaff: 1003, depart: "220", fam: "Богданов", first_name: "Устин", last_name: "Петрович", points: 1523, day_of_work: 205, eff: 0.79 },
        { idstaff: 1004, depart: "220", fam: "Горшков", first_name: "Остап", last_name: "Ростиславович", points: 1870, day_of_work: 102, eff: 1 },
        { idstaff: 1005, depart: "221", fam: "Моисеев", first_name: "Осип", last_name: "Вадимович", points: 1142, day_of_work: 196, eff: 1.04 },
        { idstaff: 1006, depart: "222", fam: "Шилов", first_name: "Корней", last_name: "Максович", points: 2995, day_of_work: 218, eff: 0.95 },
      ]
    },
    new_mas: {
      previousValue: null,
      lastValue: null
    },
    sort_eff: {
      previousValue: null,
      lastValue: null
    },
    result_mas: []

  },
  mutations: {
    setNewMas(state, obj) {
      state.new_mas.previousValue = obj.previousValue
      state.new_mas.lastValue = obj.lastValue
    },
    setSorEff(state, obj) {
      for (let key in obj) {
        // Сортировка от большего к меньшему
        let res = obj[key].sort(function (a, b) {
          // Разобрать случай когда эффективность двух работников одинакова
          return b.eff - a.eff
        })
        // Заносим значение в state
        state.sort_eff[key] = res
      }

    },
    setRultsMas(state, obj){
      
    }
  },
  actions: {
    changeMas({ commit, state }) {

      let newM = []

      let obj_el

      // Вместо state.get_mas поставить переменную которая содержит [] с двумя объектами 
      // !!!! в котором ПЕРВЫЙ ОБЪЕКТ это то что было (неделю, день, и.т.д) надаз 


      for (let key in state.get_mas) {
        state.get_mas[key].forEach((element, index) => {
          obj_el = {}

          // В каком виде записывать ? Белецкий А.В или Белецкий Алексей Вячеславович

          obj_el.idstaff = element.idstaff
          obj_el.name = element.fam + " " + element.first_name + " " + element.last_name // Объединяем ФИО
          obj_el.depart = element.depart
          obj_el.day_of_work = element.day_of_work
          obj_el.points = element.points
          obj_el.eff = element.eff

          newM.push(obj_el)
        });

      }
      // newM ВСГЕДА БУДЕТ ЧЕТНЫМ 
      let pos = newM.length / 2

      // Разделяем массив на то что было ДО и ПОСЛЕ с помощью метода .slice()
      // поэтому в начале мы всегда передаем массив с 2 объектами 
      // где ПЕРВЫЙ это данные какие были (неделю, день, и.т.д) надаз 

      let previousValue = newM.slice(0, pos)
      let lastValue = newM.slice(pos)


      commit('setNewMas', { previousValue, lastValue })
      commit('setSorEff', { previousValue, lastValue })
    }
  },
  modules: {
  }
})
