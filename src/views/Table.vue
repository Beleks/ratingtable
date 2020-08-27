<template>
  <div class="main">
    <table>
      <tr>
        <td>№</td>
        <td>ФИО</td>
        <td>Очки</td>
        <td>Отработанных дней</td>
        <td>Эффективность</td>
      </tr>
      <tr v-for="(person, index) in people" :key="person.idstaff">
        <td>{{index}}</td>
        <td>{{person.name}}</td>
        <td>{{person.points}}</td>
        <td>{{person.day_of_work}}</td>
        <td>{{person.eff}}</td>
      </tr>
      <!-- <div class="first-line line">
        <div class="num"></div>
        <div class="FIO"></div>
        <div class="points"></div>
        <div class="days"></div>
        <div class="eff"></div>
      </div>-->
      <!-- <line-table
        v-for="(person, index) in people"
        :key="person.idstaff"
        :number="index + 1"
        :name="person.name"
        :points="person.points"
        :eff="person.eff"
        :depart="person.depart"
        :change="person.changeEff"
        class="line"
      ></line-table>-->
    </table>
  </div>
  <!-- <div class="footer">
      <div class="block">
        <div class="one"></div>
        <div>- depart "219"</div>
      </div>
      <div class="block">
        <div class="two"></div>
        <div>- depart "220"</div>
      </div>
      <div class="block">
        <div class="three"></div>
        <div>- depart "221"</div>
      </div>
      <div class="block">
        <div class="four"></div>
        <div>- depart "222"</div>
      </div>
    </div>
  </div>-->
</template>
<script>
import LineTable from "@/components/LineTable.vue";

export default {
  data: () => {
    return {};
  },
  computed: {
    people() {
      return this.$store.state.finalMas;
    },
  },
  components: {
    LineTable,
  },
};
</script>
<style lang="css" scoped>
.main {
  border-radius: 10px;
  background-color: white;
  margin: 1em 2em;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
}
.table {
  display: flex;
  flex-direction: column;
  /* max-width: 910px; */
  margin: 1em auto;
}
.first-line {
  display: flex;
}
.first-line > div {
  padding: 0.2em 0;
  /* border-right: 1px solid black; */
}
.first-line > div:not(:last-child) {
  border-right: 1px solid black;
}
.num {
  flex-grow: 0.5;
  flex-shrink: 1;
}
.FIO {
  flex-grow: 4;
  flex-shrink: 1;
}
.points {
  flex-grow: 1;
  flex-shrink: 1;
  max-width: 180px;
}
.eff {
  flex-grow: 1;
  flex-shrink: 1;
  max-width: 180px;
}
.days {
  flex-grow: 1;
  flex-shrink: 1;
  max-width: 180px;
}
.line {
  border: 1px solid black;
}
.line:not(:first-child) {
  border-top: none;
}

/*================*/
.footer {
  margin: 1em;
  display: flex;
  flex-direction: column;
}
.block {
  display: flex;
  justify-content: center;
  align-items: center;
}
.block > div {
  margin: 0.5em;
}
.one {
  width: 50px;
  height: 10px;
  border-radius: 5px;
  background-color: #6c5ce7;
}
.two {
  width: 50px;
  height: 10px;
  border-radius: 5px;
  background-color: #fdcb6e;
}
.three {
  width: 50px;
  height: 10px;
  border-radius: 5px;
  background-color: #d63031;
}
.four {
  width: 50px;
  height: 10px;
  border-radius: 5px;
  background-color: #00b894;
}
</style>