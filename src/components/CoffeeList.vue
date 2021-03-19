<template>
  <div>
    <span>Coffee List:</span>
    <li v-for="coffee in coffeeList" v-bind:key="coffee">
      <CoffeeElement :coffee=coffee />
    </li>
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
          this.coffeeList.push(new CoffeeElementModel(response.name, response.producer))
        })
  },
}
</script>
