<template>
<div>
    <h5  class="text-end mt-2">Bienvenido: {{personData.nombre}} </h5>
    <p>Este es un parrafo encima de la tabla de personas</p>
    <router-view />
    <p>Este es un parrafo debajo de la tabla de personas</p>
</div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    
    name: 'user',
    data(){
        return {
        }
    },     
    computed: {
        ...mapState('auth', ['personData'])
    },

}
</script>