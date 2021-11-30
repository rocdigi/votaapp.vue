<template>  
<b-navbar type="light" variant="warning" >
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand><img src="@/assets/logoVotaApp.png" alt="VotaApp"></b-navbar-brand>

    <b-navbar-nav itemtype="dark">
      <b-nav-item exact to="/" class="mb-0" >Iniciar sesión</b-nav-item>
      <b-nav-item exact to="/about" class="mb-0">Sobre nosotros</b-nav-item>     
    </b-navbar-nav>
  </b-navbar>

    
</template>

<script>
import { BNav, BNavbar, BNavbarBrand, BNavbarToggle} from 'bootstrap-vue'

export default {
    name: "GuestNav",
    components:{
        BNav, BNavbar, BNavbarBrand, BNavbarToggle
    }
}
</script>