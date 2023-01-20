<template>
  <header
    class="
      relative
      flex flex-wrap
      items-center
      justify-end
      px-2
      py-3
      mb-3
      border-b-2 border-gray-500
    "
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-between mr-3">
        <form>
          <div class="relative">
            <label class="block" for="id">
              <input
                type="text"
                id="id"
                v-model="search"
                class="
                  block
                  w-full
                  p-2
                  pl-4
                  text-sm text-gray-900
                  border border-gray-300
                  rounded-lg
                  bg-gray-50
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                "
                placeholder="Search"
                required
              />
            </label>

            <button
              type="button"
              class="
                text-white
                absolute
                right-1.5
                bottom-1.5
                bg-gray-500
                hover:bg-gray-300
                focus:ring-4 focus:outline-none focus:ring-blue-300
                font-medium
                rounded-lg
                text-sm
                px-1
                py-1
              "
              @click="searchArticle()"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-white dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div>
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          class="
            flex-shrink-0
            z-10
            inline-flex
            items-center
            py-2.5
            px-4
            text-sm
            font-medium
            text-center text-gray-900
            bg-gray-100
            border border-gray-300
            rounded-lg
            hover:bg-gray-200
            dark:bg-gray-700
            dark:hover:bg-gray-600
            dark:focus:ring-gray-700
            dark:text-white
            dark:border-gray-600
          "
          type="button"
        >
          Sort
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          id="dropdown"
          class="
            z-10
            hidden
            bg-white
            divide-y divide-gray-100
            rounded
            shadow
            w-44
            dark:bg-gray-700
          "
          data-popper-reference-hidden=""
          data-popper-escaped=""
          data-popper-placement="top"
          style="
            position: absolute;
            inset: auto auto 0px 0px;
            margin: 0px;
            transform: translate3d(897px, 5637px, 0px);
          "
        >
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            <li>
              <button
                type="button"
                class="
                  inline-flex
                  w-full
                  px-4
                  py-2
                  hover:bg-gray-100
                  dark:hover:bg-gray-600 dark:hover:text-white
                "
              >
                Mockups
              </button>
            </li>
            <li>
              <button
                type="button"
                class="
                  inline-flex
                  w-full
                  px-4
                  py-2
                  hover:bg-gray-100
                  dark:hover:bg-gray-600 dark:hover:text-white
                "
              >
                Templates
              </button>
            </li>
            <li>
              <button
                type="button"
                class="
                  inline-flex
                  w-full
                  px-4
                  py-2
                  hover:bg-gray-100
                  dark:hover:bg-gray-600 dark:hover:text-white
                "
              >
                Design
              </button>
            </li>
            <li>
              <button
                type="button"
                class="
                  inline-flex
                  w-full
                  px-4
                  py-2
                  hover:bg-gray-100
                  dark:hover:bg-gray-600 dark:hover:text-white
                "
              >
                Logos
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <img src="" alt="" />
      </div>
      <div class=""></div>
    </div>
  </header>
</template>
<script>
export default {
  name: "HeaderListComponent",
  data: () => ({
    search: "",
  }),
  methods: {
    searchArticle() {
      this.$emit("serchArticleByTitle", this.search);
    },
  },
};
</script>
<style>
</style>