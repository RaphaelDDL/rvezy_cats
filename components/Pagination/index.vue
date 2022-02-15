<template>
  <nav>
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: !hasPrevPage }">
        <a aria-label="Previous" class="page-link" @click="prevPage">
          <span aria-hidden="true">&laquo; Previous</span>
        </a>
      </li>

      <!-- TODO: mount number of pages before current -->
      <!-- <li class="page-item"><a class="page-link" href="#">number</a></li> -->

      <!-- CURRENT -->
      <li class="page-item active">
        <a aria-label="Current" class="page-link">
          <span aria-hidden="true">{{ currentPage + 1 }}</span>
        </a>
      </li>

      <!-- TODO: mount number of pages after current -->
      <!-- <li class="page-item"><a class="page-link" href="#">number</a></li> -->

      <li class="page-item" :class="{ disabled: !hasNextPage }">
        <a aria-label="Next" class="page-link" @click="nextPage">
          <span aria-hidden="true">Next &raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

:current-page="page" :total-pages="pageCount" @change-page="changePage"

<script>
export default {
  props: ['currentPage', 'totalPages'],
  computed: {
    hasPrevPage() {
      return !!this.currentPage > 0
    },
    hasNextPage() {
      return !!this.currentPage < this.totalPages
    },
  },
  methods: {
    prevPage() {
      return this.hasPrevPage
        ? this.$emit('change-page', this.currentPage - 1)
        : undefined
    },
    nextPage() {
      return this.hasNextPage
        ? this.$emit('change-page', this.currentPage + 1)
        : undefined
    },
  },
}
</script>

<style lang="scss" scoped>
a:hover {
  cursor: pointer;
}
</style>
