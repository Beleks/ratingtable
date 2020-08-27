<template>
  <div>
    Таблица
    <div class="table">
      <div class="first-line line">
        <div>№</div>
        <div>ФИО</div>
        <div>Очки</div>
        <div>Эффективность</div>
        <div></div>
      </div>
      <line-table
        v-for="(person, index) in people"
        :key="person.idstaff"
        :number="index + 1"
        :name="person.name"
        :points="person.points"
        :eff="person.eff"
        :depart="person.depart"
        class="line"
      ></line-table>
    </div>
    <div class="footer">
      <div class="block">
        <div class="one"></div>
        <div> - depart "219"</div>
      </div>
      <div class="block">
        <div class="two"></div>
        <div> - depart "220"</div>
      </div>
      <div class="block">
        <div class="three"></div>
        <div> - depart "221"</div>
      </div>
      <div class="block">
        <div class="for"></div>
        <div> - depart "222"</div>
      </div>
    </div>
  </div>
</template>
<script>
import LineTable from "@/components/LineTable.vue";

export default {
  data: () => {
    return {};
  },
  computed: {
    people() {
      return this.$store.state.new_mas.lastValue;
    },
  },
  components: {
    LineTable,
  },
};
</script>
<style lang="scss" scoped>
.table {
  margin: 0.5em;
  display: grid;
  // grid-template-rows: 1fr;
  max-width: 750px;
  margin: auto;
  font-size: 1.1rem;

  .first-line {
    display: grid;
    grid-template-columns:
      minmax(30px, 150px) minmax(330px, 400px) minmax(100px, 150px)
      150px minmax(100px, 1fr);
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      // padding: 0.2em;
      height: 45px;
    }
    div:not(:first-child) {
      border-left: 1px solid black;
    }
  }
  .line {
    height: 45px;
    border: 1px solid black;
    border-bottom: none;
  }
  .line:last-child {
    border-bottom: 1px solid black;
  }
}

//================ COLOR
.footer {
  margin: 1em;
  display: flex;
  flex-direction: column;
  .block {
    display: flex;
    justify-content: center;
    align-items: center;
    div{
      margin: 0.5em;
    }
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
  .for {
    width: 50px;
    height: 10px;
    border-radius: 5px;
    background-color: #00b894;
  }
}
</style>