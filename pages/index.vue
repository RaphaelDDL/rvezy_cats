<template>
  <div>
    <div class="px-3 text-center">
      <h1>RVezy Cats</h1>
      <p class="lead">Test using api.thecatapi.com</p>
    </div>
    <div class="px-3">
      <h3>Made with NUXT (Vue, Vuex, SSR Enabled)</h3>

      <ul>
        <li><em>Cat List</em> opens List of Cats.</li>
        <li>
          <em>Cat Single (OK)</em> opens a detail page directly. If
          <em>Cat List</em> was loaded before, and the cat currently exists in
          the store, no additional calls are made. Otherwise, makes call to API
          for single cat ID.
        </li>
        <li>
          <em>Cat Single (Wrong)</em> opens a detail page directly but with an
          invalid ID. Example for call to API which results in 400, therefore
          Error Page handling.
        </li>
      </ul>
    </div>
    <img class="cat" src="~/assets/img/home.jpg" alt="" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
img.cat {
  max-width: 250px;
  margin: 0 auto;
  display: block;
}
</style>
