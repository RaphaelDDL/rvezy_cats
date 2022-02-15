<template>
  <header
    class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
    >
      <span class="fs-4">RVezy Cats</span>
    </a>

    <ul class="nav nav-pills">
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/">Home</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/cats">Cat List</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/cat/2OoTg0nzM"
          >Cat Single (OK)</nuxt-link
        >
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/cat/wrongIdHere"
          >Cat Single (Wrong)</nuxt-link
        >
      </li>
    </ul>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
