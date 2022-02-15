const CAT_API_KEY = process.env.CAT_API_KEY

export const state = () => ({
  // Store will cache only last list call
  // on a more robust store, it would be nice to
  // cache all loaded pages if cache is a factor
  cats: [],
  page: 0,
  pageCount: 0,
})

export const getters = {
  cats: (state) => state.cats,
  page: (state) => state.page,
  cat: (state) => (id) => state.cats.find((cat) => cat.id === id),
}

export const mutations = {
  SET_CATS(state, cats) {
    state.cats = cats
  },
  SET_PAGE_COUNT(state, pageCount) {
    state.pageCount = pageCount
  },
  SET_PAGE_NUMBER(state, page = 0) {
    state.page = Number(page) || 0
  },
}

export const actions = {
  GET_LIST({ commit, getters }, { page = 0 } = {}) {
    return new Promise((resolve, reject) => {
      const pageNumber = Number(page)
      commit('SET_PAGE_NUMBER', pageNumber > 0 ? pageNumber : 0)

      const currPage = getters.page

      this.$axios
        .get('/search', {
          params: {
            limit: 10,
            order: 'Desc',
            page: currPage,
          },
          headers: { 'x-api-key': CAT_API_KEY },
        })
        .then((r) => {
          commit(
            'SET_PAGE_COUNT',
            Number(r?.headers?.['pagination-count']) || 0
          )
          return r?.data
        })
        .catch((error) => {
          console.log('list error', error)
          reject(error)
        })
        .then((cats = []) => {
          commit('SET_CATS', cats)
          resolve(cats)
        })
    })
  },
  GET_SINGLE({ getters }, { id }) {
    return new Promise((resolve, reject) => {
      // get from cache if we have it
      const cat = getters.cat(id)
      if (cat) {
        resolve(cat)
        return
      }

      this.$axios
        .get(`/${id}`, {
          headers: { 'x-api-key': CAT_API_KEY },
        })
        .then((r) => {
          return r?.data
        })
        .catch((error) => {
          console.log('single error', error)
          reject(error)
        })
        .then((cat = {}) => {
          resolve(cat)
        })
    })
  },
}
