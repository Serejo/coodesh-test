<template>
  <div
    class="
      max-w-md
      mx-auto
      bg-white
      rounded-md
      shadow-md
      overflow-hidden
      md:max-w-2xl
    "
  >
    <div class="md:flex">
      <div class="shrink-0">
        <img
          :src="articleObj.imageUrl"
          alt=""
          class="h-48 object-cover md:h-full md:w-48 sm:h-full sm:w-full"
        />
      </div>
      <div class="p-8">
        <div
          class="uppercase tracking-wide text-sm text-gray-900 font-semibold"
        >
          {{ articleObj.title }}
        </div>
        <div
          class="flex flex-wrap justify-between my-2 text-start text-gray-500"
        >
          <div class="text-sm">
            {{ articleObj.publishedAt | formatDate }}
          </div>
          <div class="text-sm">
            {{ articleObj.newsSite }}
          </div>
        </div>
        <div class="text-start">{{ articleObj.summary }}</div>
        <div class="text-start">
          <button
            :href="articleObj.url"
            type="button"
            class="
              text-white
              bg-gray-400
              border border-gray-300
              focus:outline-none
              hover:bg-gray-300
              rounded-lg
              text-sm
              px-5
              py-2.5
              mr-2
              mb-2
            "
            @click="openDetailsArticle(articleObj)"
          >
            Ver Mais
          </button>
        </div>
      </div>
    </div>
    <div>
      <modal-article-component
        :dialogArticle="dialogArticle"
        :articleObj="articleDetails"
        @closeDialog="closeDialog"
      />
    </div>
  </div>
</template>
<script>
import ModalArticleComponent from "./ModalArticleComponent.vue";

export default {
  components: { ModalArticleComponent },
  name: "CardListComponent",
  data() {
    return {
      reRender: 0,
      dialogArticle: false,
      articleDetails: {},
    };
  },
  props: {
    articleObj: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openDetailsArticle(articleObj) {
      this.articleDetails = articleObj;
      this.dialogArticle = true;
    },
    closeDialog() {
      this.dialogArticle = false;
    },
  },
  filters: {
    formatDate(dateToBeFormatted) {
      return new Date(dateToBeFormatted).toLocaleDateString("pt-BR", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      });
    },
  },
};
</script>
<style>
</style>