<template>
  <div class="line-row">
    <div>{{number}}</div>
    <div class="name">
      <div
        class="depart"
        :class="{
        one: depart === '219',
        two: depart === '220',
        three: depart === '221',
        four: depart === '222',
      }"
      ></div>
      <div class="name-block">
        <div>{{name}}</div>
      </div>
    </div>
    <div>{{points}}</div>
    <div>{{eff}}</div>
    <div>160</div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {};
  },
  props: {
    number: Number,
    name: String,
    points: Number,
    eff: Number,
    depart: String,
  },
  computed: {
    people() {
      return this.$store.state.sort_eff.lastValue;
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.line-row {
  // margin: 0.2em;
  display: grid;
  // background-color: blanchedalmond;
  // grid-template-columns: repeat(5, minmax(130px, 1fr));
  grid-template-columns:
    minmax(30px, 150px) minmax(330px, 400px) minmax(100px, 150px)
    150px minmax(100px, 1fr);
  // Разному максимальная ширина (без repeat)
}
.line-row > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.line-row > div:not(:first-child) {
  border-left: 1px solid black;
}
.name {
  display: flex;
  height: 45px;
  .depart {
    width: 6px;
    height: 100%;
    // background-color: blanchedalmond;
    // border-radius: 10px;
  }
  .name-block {
    margin: auto;
  }
}
// Отделы =================================
.one {
  background-color: #6c5ce7;
}
.two {
  background-color: #fdcb6e;
}
.three {
  background-color: #d63031;
}
.four {
  background-color: #00b894;
}
</style>