<template>
  <div class="list-container">
    <div class="list-element" v-for="coffee in coffeeList" v-bind:key="coffee">
      <CoffeeElement :coffee=coffee />
    </div>
  </div>
</template>

<script>
import {getCoffeeList} from "../service/coffeeService";
import CoffeeElementModel from "./classes/CoffeeElementModel";
import CoffeeElement from "./CoffeeElement";

export default {
  name: 'CoffeeList',
  data: () => ({
    coffeeList: []
  }),
  components: {
    CoffeeElement
  },

  mounted() {
    getCoffeeList()
        .then(response => {
          this.coffeeList.push(new CoffeeElementModel(response.name, response.producer, response.imageUrl))
        })
  },
}
</script>

<style scoped>
.list-container {
  margin-top: 50px;
  width: 100%;
  overflow: hidden;
  text-align: center;
}

.list-element {
  width: 80%;
  display: inline-block;
  text-align: center;
}
</style>
