<template>
 <b-navbar type="light" variant="warning">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand><img src="@/assets/logoVotaApp.png" alt="logoVotaapp"></b-navbar-brand>

    <b-navbar-nav>
      <b-nav-item exact to="/questions">Votación</b-nav-item>
      <b-nav-item exact to="/about">Resultados</b-nav-item>
      <b-nav-item exact to="/about">Ayuda</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Configuracion" right>
        <b-dropdown-item exact to="/question/create">Preguntas</b-dropdown-item>
        <b-dropdown-item v-if="personData.rol=='Admin'" exact :to="{name:'PersonList'}">Administrar Votantes</b-dropdown-item>       
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="Usuario" right>
        <b-dropdown-item href="#">Perfil</b-dropdown-item>
        <b-dropdown-item @click="signOut">Cerrar Sesion</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>


<script>
import { BNav, BNavItem } from 'bootstrap-vue'
import { mapMutations, mapState } from 'vuex';

export default {
    name: "GuestNav",
    components:{
        BNav, BNavItem
    },
    methods:{
        ...mapMutations('auth', ['logout']),
        signOut(){
            this.logout();
            this.$router.push('/login')
        }
    },
    computed: {
        ...mapState('auth', ['personData'])
    }
}
</script>