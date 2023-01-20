<template>
  <div id="app">
    <div class="w-full px-5">
      <header-list-component
        class=""
        @serchArticleByTitle="serchArticleByTitle"
      />
      <div class="grid-cols-1" v-for="(article, i) in articles" :key="i">
        <card-list-component
          :article-obj="article"
          v-if="i % 2 == 0"
          class="my-10"
        />

        <card-list-component-inverted :article-obj="article" v-else />
      </div>
      <div
        class="
          my-10
          flex flex-col
          justify-center
          gap-4
          items-center
          text-center
        "
        v-if="articles.length"
      >
        <div class="w-4 h-4 bg-gray-300 border-gray-400 border-2"></div>
        <div class="w-4 h-4 bg-gray-300 border-gray-400 border-2"></div>
        <div class="w-4 h-4 bg-gray-300 border-gray-400 border-2"></div>
        <button
          type="button"
          class="
            text-purple-500
            border border-purple-500
            focus:outline-none
            hover:bg-gray-300
            rounded-md
            text-sm
            px-5
            py-2.5
            mt-3
          "
          @click="loadMore()"
        >
          Carregar Mais
        </button>
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
    page: 1,
    PerPage: 10,
  }),
  mounted: function () {
    fetch(
      `https://api.spaceflightnewsapi.net/v3/articles?_limit=${this.PerPage}&_start=${this.page}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.articles = json;
      });
  },
  methods: {
    loadMore() {
      this.page += this.PerPage;
      fetch(
        `https://api.spaceflightnewsapi.net/v3/articles?_limit=${this.PerPage}&_start=${this.page}`
      )
        .then((response) => response.json())
        .then((json) => {
          this.articles = this.articles.concat(json);
        });
    },
    serchArticleByTitle(title) {
      fetch(
        `https://api.spaceflightnewsapi.net/v3/articles?_limit=${this.PerPage}&_start=${this.page}&title_contains=${title}`
      )
        .then((response) => response.json())
        .then((json) => {
          this.articles = json;
        });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap");
#app {
  font-family: Roboto Condensed, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
