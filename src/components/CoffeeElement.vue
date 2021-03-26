<template>
  <div class="main-container">

    <div class="image-container">
      <img :src=coffee.getImageUrl()>
    </div>
    <div class="content-container">
      <div class="coffee-property-container">
        <span>Nazwa:</span>
        <span>
          {{ coffee.getName() }}
        </span>
      </div>

      <div class="coffee-property-container">
        <span>Producent:</span>
        <span>
          {{ coffee.getProducer() }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>

import CoffeeElementModel from "./classes/CoffeeElementModel";

export default {
  name: "CoffeeElement",
  props: {
    coffee: CoffeeElementModel
  }
}
</script>

<style scoped>

.main-container {
  display: inline-block;
  width: 80%;
  border-left: 1px solid #2c3e50;
  border-bottom: 1px solid #2c3e50;
  overflow: hidden;
  margin-bottom: 20px;
  margin-top: 30px;
}

.image-container {
  float: left;
}

.image-container img {
  max-height: 350px;
}

.content-container {
  float: left;
  margin-top: 5%;
  text-align: left;
}

.coffee-property-container {
  margin-left: 10px;
  margin-top: 5px;
}

</style>