<template>
  <div>
    <div
      v-if="dialogArticle"
      class="
        overflow-x-hidden overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        justify-center
        items-center
        flex
      "
    >
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <div
          class="
            border-0
            rounded-lg
            shadow-lg
            relative
            flex flex-col
            bg-white
            outline-none
            focus:outline-none
          "
        >
          <div class="flex items-center justify-end pt-2 pr-2 rounded-b">
            <button
              class="
                text-white
                bg-orange-500
                border border-solid border-orange-500
                hover:bg-orange-500 hover:text-white
                active:bg-orange-600
                focus:outline-none
                rounded-lg
                text-sm
                px-2.5
                py-1
                ml-2
                mb-2
              "
              type="button"
              v-on:click="closeModal()"
            >
              X
            </button>
          </div>
          <div class="flex flex-row-reverse p-4">
            <div class="p-5">
              <div
                class="
                  uppercase
                  tracking-wide
                  text-sm text-gray-900
                  font-semibold
                "
              >
                {{ articleObj.title }}
              </div>
              <div
                class="
                  flex flex-wrap
                  justify-between
                  my-2
                  text-start text-gray-500
                "
              >
                <div class="text-sm">
                  {{ articleObj.publishedAt | formatDate }}
                </div>
              </div>
              <div class="text-start">{{ articleObj.summary }}</div>
            </div>
            <div class="md:shrink-0 p-5">
              <img
                :src="articleObj.imageUrl"
                alt=""
                class="h-48 object-cover md:h-full md:w-48 sm:h-auto sm:w-auto"
              />
            </div>
          </div>
          <div class="text-center pb-4">
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
                ml-2
                mb-2
              "
              @click="goToSite(articleObj)"
            >
              Ir para o site
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="dialogArticle"
      class="opacity-25 fixed inset-0 z-40 bg-black"
    ></div>
  </div>
</template>
       
<script>
export default {
  name: "ModalArticleComponent",
  data() {
    return {};
  },
  props: {
    articleObj: {
      type: Object,
      required: true,
    },
    dialogArticle: {
      type: Boolean,
      required: true,
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
  methods: {
    goToSite(articleObj) {
      window.open(articleObj.url, "_blank");
    },
    closeModal() {
      this.$emit("closeDialog");
    },
  },
};
</script>
<style>
</style>