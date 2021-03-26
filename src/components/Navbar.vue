<template>
  <div class="nav-container">
    <div class="menu-container">
      <img src="/coffee_logo.png">
      <div class="menu-element-container">
        <div class="menu-text">
          <div class="text">Artykuły</div>
        </div>
      </div>
      <div class="menu-element-container">
        <div class="menu-text">
          <div class="text">
            Najlepsze Kawy
          </div>
        </div>
      </div>
      <div class="menu-element-container">
        <div class="menu-text">
          <div class="text">
            Kawy Speciality
          </div>
        </div>
      </div>
      <div class="menu-element-container">
        <div class="menu-text">
          <div class="text">
            Dodaj Kawę
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.nav-container {
  /*height: 35px;*/
  text-align: center;
  overflow: hidden;
  border-bottom: 1px solid #F0E68C;
}

.menu-container {
  list-style: none;
  /*display: flex;*/
  /*list-style-type: none;*/
  overflow: inherit;
  display: inline-block;
  width: 50%;
  padding-bottom: 10px;
}

.menu-element-container {
  height: 80px;
  position: relative;
  vertical-align: text-bottom;
  float: left;
  width: 20%;
}

.menu-text {
  position: absolute;
  bottom: 0px;
}

.text:hover {
  cursor: pointer;
  transition: 0.25s;
  /*border-bottom: 1px solid #8254ff;*/
  font-weight: bold;

}

/*menu-text:hover {*/
/*  cursor: crosshair;*/
/*  transition: 0.5s;*/
/*  background-color: #8254ff;*/
/*}*/


.menu-container img {
  margin-right: 100px;
  float: left;
  height: 80px;
}
</style>