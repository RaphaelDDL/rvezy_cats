<template>
  <div v-if="cat" class="card">
    <img :src="cat.url" class="card-img-top" alt="a cat" />
    <div class="card-footer">
      <small class="text-muted">{{ cat.id }}</small>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, error, params }) {
    try {
      const cat = await store.dispatch('cats/GET_SINGLE', { id: params.id })
      return {
        cat,
      }
    } catch (err) {
      error({ statusCode: 404, message: err.message })
    }
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
