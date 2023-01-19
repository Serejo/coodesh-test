<template>
  <div id="app">
    <div class="w-full px-5">
      <header-list-component class="" />
      <div class="grid-cols-1" v-for="(article, i) in articles" :key="i">
        <card-list-component :article-obj="article" v-if="i % 2 == 0" />

        <card-list-component-inverted :article-obj="article" v-else />
      </div>
    </div>
  </div>
</template>

<script>
import CardListComponent from "./components/CardListComponent.vue";
import CardListComponentInverted from "./components/CardListComponentInverted.vue";
import HeaderListComponent from "./components/HeaderListComponent.vue";
export default {
  name: "App",
  components: {
    HeaderListComponent,
    CardListComponent,
    CardListComponentInverted,
  },
  data: () => ({
    articles: [],
  }),
  mounted: function () {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
      .then((response) => response.json())
      .then((json) => {
        this.articles = json;
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
