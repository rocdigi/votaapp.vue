<template>
<div>
    <h5  class="text-end mt-2">Bienvenido: {{personData.nombre}} </h5>
    <router-view />
</div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    
    name: 'user',
    data(){
        return {
            person: {
                email: "",
                nombre: ""
            }
        }
        
        
    },     
    computed: {
        ...mapState('auth', ['personData'])
    },
    created(){
       // this.person.nombre = store.state.auth.personData.name;
       // console.log(person.nombre)
    }
    
}
</script>