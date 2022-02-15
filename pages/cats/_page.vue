<template>
  <div>
    <Pagination
      :current-page="page"
      :total-pages="pageCount"
      @change-page="changePage"
    />
    <div v-if="cats" class="row row-cols-2 row-cols-md-3 g-4">
      <nuxt-link
        v-for="cat in cats"
        :key="cat.id"
        :to="`/cat/${cat.id}`"
        class="col"
      >
        <div class="card">
          <img :src="cat.url" class="card-img-top" alt="a cat" />
          <div class="card-footer">
            <small class="text-muted">{{ cat.id }}</small>
          </div>
        </div>
      </nuxt-link>
    </div>
    <Pagination
      :current-page="page"
      :total-pages="pageCount"
      @change-page="changePage"
    />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  async asyncData({ store, error, params }) {
    try {
      const cats = await store.dispatch('cats/GET_LIST', {
        page: params.page,
      })
      return {
        cats,
      }
    } catch (err) {
      error({ statusCode: 404, message: err.message })
    }
  },
  computed: {
    ...mapState('cats', ['page', 'pageCount']),
  },
  watch: {
    page(newPage) {
      this.$router.push(`/cats/${newPage}`)
    },
  },
  methods: {
    ...mapActions('cats', ['GET_LIST']),
    ...mapMutations('cats', ['SET_PAGE_NUMBER']),
    changePage(pageNum) {
      this.SET_PAGE_NUMBER(pageNum)
    },
  },
}
</script>
