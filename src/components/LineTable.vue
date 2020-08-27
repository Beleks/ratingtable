<template>
  <div class="line-row">
    <div class="num">{{number}}</div>
    <div class="FIO">
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
    <div class="points">{{points}}</div>
    <div class="days">160</div>
    <div class="eff">{{eff}} | {{change}}</div>
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
    change: Number,
  },
  computed: {
    people() {
      return this.$store.state.sort_eff.lastValue;
    },
  },
  methods: {},
};
</script>
<style lang="css" scoped>

/* ========================================== */
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