<template>
  <div id="app">
    <TheHeader/>
    <main id="main">
      <transition mode="out-in">
        <router-view/>
      </transition>
    </main>
  </div>
</template>


<script>

import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  }  
};

</script>

<style>
* {
  box-sizing: border-box;
}
body,ul,li,h1,h2,p {
  padding: 0px;
  margin: 0px;
}
ul {list-style: none;}

body {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: rgb(54, 54, 54);
  background: url("./assets/pattern.svg");
}
a {
  color: rgb(58, 58, 58);
  text-decoration: none;
}
.btn {
  display: block;
  padding: 10px 30px;
  background: rgb(94, 94, 94);
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(61, 61, 61, 0.2);
  transition: all 0.3s;
  border: none;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  cursor: pointer;
}
.btn:hover {
  background: rgba(159, 159, 160, 0.555);
  transform: scale(1.0);
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
#main{
  flex: 1;
}
input,textarea{
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(36, 36, 36, 0.26);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin-bottom: 15px; 
}
input:hover,
input:focus,
textarea:hover,
textarea:focus {
  outline: none;
  box-shadow: 0 6px 12px rgba(78, 78, 78, 0.2);
  border-color: rgb(59, 59, 59);
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translate3d(0,-20px,0);
}
.v-leave-to {
  transform: translate3d(0,20px,0);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}


</style>
