<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <HelloWorld msg="vue3-ts" />
      <nav>
        <RouterLink to="/">props</RouterLink>
        <RouterLink to="/emit">emit</RouterLink>
        <RouterLink to="/refOrReactive">refOrReactive</RouterLink>
        <RouterLink to="/provide">provide</RouterLink>
        <RouterLink to="/template">template</RouterLink>
        
      </nav>
      <nav>
        <RouterLink to="/basicType">basicType</RouterLink>
        <RouterLink to="/variableDeclaration">variableDeclaration</RouterLink>
        <RouterLink to="/class">class</RouterLink>
        <RouterLink to="/interfaces">interfaces</RouterLink>
        <RouterLink to="/function">function</RouterLink>
        <RouterLink to="/generic">generic</RouterLink>
        <RouterLink to="/enum">enum</RouterLink>
        
      </nav>

      <nav>
        <RouterLink to="/typeInterference">typeInterference</RouterLink>
        <RouterLink to="/typeCompatibility">typeCompatibility</RouterLink>
        <RouterLink to="/advancedTypes">advancedTypes</RouterLink>
        
      </nav>

      
      
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
