<!-- src/components/Navbar.vue -->
<template>
  <header class="header_area">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <!-- Brand and toggle get grouped for better mobile display -->
        <router-link class="navbar-brand logo_h" to="/"><img src="@/assets/Logo.png" alt="Logo"></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
          <ul class="nav navbar-nav menu_nav ml-auto">
            <li class="nav-item active"><router-link class="nav-link" to="/">Home</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/about">About us</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/accomodation">Accomodation</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
/* Ajouter les styles spécifiques au composant ici, si nécessaire */
</style>
