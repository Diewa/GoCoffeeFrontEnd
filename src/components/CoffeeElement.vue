<template>
  {{coffee.getName()}}
  {{coffee.getProducer()}}
  <div class="main-container">
    <div class="image-container">
    </div>
    <div class="content-container">
    </div>
  </div>
</template>

<script>
// import CoffeeElementModel from "./classes/CoffeeElement";

import CoffeeElementModel from "./classes/CoffeeElementModel";

export default {
  name: "CoffeeElement",
  props: {
    coffee: CoffeeElementModel
  }
}
</script>

<style scoped>

</style>