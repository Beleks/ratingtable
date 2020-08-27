<template>
  <div class="main">
    <table>
      <tr>
        <td class="num-td">№</td>
        <td>ФИО</td>
        <td class="poinst-td">Очки</td>
        <td class="days-td">Отработанных дней</td>
        <td>Эффективность</td>
      </tr>
      <tr v-for="(person, index) in people" :key="person.idstaff">
        <td class="num-td">
          <div
            class="num"
            :class="{
          gold: index === 0,
          silver: index === 1, 
          bronze: index === 2}"
          >{{index + 1}}</div>
        </td>
        <td class="FIO-td">
          <div class="FIO">{{person.name}}</div>
        </td>
        <td class="poinst-td">
          <div>{{person.points}}</div>
        </td>
        <td class="days-td">
          <div>{{person.day_of_work}}</div>
        </td>
        <td class="eff-td">
          <div class="eff-main">
            <div class="space">
              <div class="eff">
                <div class="eff-left">{{person.eff}}</div>
              </div>
              <div
                class="change-eff"
                :class="{green: person.changeEff >= 0,
              red: person.changeEff < 0}"
              >({{person.changeEff}})</div>
            </div>
          </div>
        </td>
      </tr>
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
table {
  /* max-width: 910px; */
  width: 100%;
  margin: 1em 0.5em;
}
td {
  padding: 0.3em 0;
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
/* ================ */
.gold {
  background: linear-gradient(to bottom right, #fff47a, #dfba01, #ffeb38);
  /* background-color: #ffd700; */
}
.silver {
  background: linear-gradient(to bottom right, #eaf8ff, #bdcbd6, #ccdae5);
}
.bronze {
  /* background: linear-gradient(to bottom right, #d19585 #996356, #996356); */
  background: linear-gradient(to bottom right, #b48073, #875346, #a57164);
}
/* ================ */

.num-td {
  display: flex;
  justify-content: center;
}
.num {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26px;
  width: 26px;
  border-radius: 15px;
}
.FIO-td {
  text-align: left;
  min-width: 200px;
}
.FIO {
  margin-left: 0.3em;
}
.points-td {
  /* width: 200px; */
  /* min-width: 200px; */
}
.points {
}
.eff-td {
  max-width: 200px;
}
.eff-main {
  display: flex;
  justify-content: center;
  /* margin-left: 1em; */
  /* padding-left: 3em; */
}
.space{
  display: flex;
  width: 100px;
  justify-content: space-between;
}
.eff {
  display: flex;
  /* min-width: 80px; */
  /* justify-content: left; */
}
.eff-left {
  left: 0;
}
.change-eff {
  margin-left: 1em;
}

.green {
  color: rgb(66, 184, 131);
}
.red {
  color: rgb(177, 32, 56);
}

.days-td {
  /* min-width: 250px; */
}
/* ===================================== */
.line {
  border: 1px solid black;
}
.line:not(:first-child) {
  border-top: none;
}

/*================*/
/* .footer {
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
} */
</style>