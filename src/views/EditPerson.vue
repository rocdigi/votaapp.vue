<template>
<div>
    <h1>Editar Persona</h1>
     <b-form class="mt-5" >
                  
             
        

        <b-form-group class="m-2"
        label="Nombre"
        >
            <b-form-input
                id="nombre"
                name="nombre"
                v-model="person.nombre"
                type="text"
                placeholder="Introduce el Nombre"
                          
            ></b-form-input>            
           
            </b-form-group>
        <b-form-group class="m-2"
        label="Descripcion"
        >
            <b-form-input
                id="email"
                name="email"
                v-model="person.email"
                type="text"
                placeholder="Introduce el Email"
                          
            ></b-form-input>            
            <b-form-group id="rols" label="Rol:" label-for="rol">
                <b-form-input name="roles" 
                v-model="person.rol" 
                list="rol" 
                id="rol"
                required></b-form-input>
                <b-form-datalist  id="rol" :options="options"
                ></b-form-datalist>
            </b-form-group>
        <b-form-group id="button" class="pt-2" >
            <b-button variant="primary"  @click="updatePerson(person)"> Guardar </b-button>            
            <b-button variant="warning" @click="cancelarPerson(person)"> Cancelar </b-button>
            <b-button variant="warning" @click="cancelarPerson(person)"> Nuevo </b-button>
          </b-form-group>  
            
        </b-form-group>
       
    </b-form>
 
</div>
</template>
<script>

import { mapActions } from 'vuex';
import { BForm, BFormGroup, BFormInvalidFeedback, BFormInput, BButton , BFormSelect, BFormDatalist} from 'bootstrap-vue'

export default {
    
    name: 'EditPerson',
    data(){
        return {
          personId : null,
          person: {
            type: Object,
            required: true
        },
        options: ['Admin', 'Votante']
        }
    },
    components: {
        BForm, BFormGroup, BFormInvalidFeedback, BFormInput, BButton,BFormSelect, BFormDatalist
    },
    mounted: function(){
        this.personId = this.$route.params.id
        console.log(this.personId)  
        this.axios.get('/api/persons/'+ this.personId).then(res => {
            this.person= res.data.person;        
    })
    },
    methods:{
         ...mapActions('person', {
            _addPerson: 'addPerson',
            _updatePerson: 'updatePerson'
        }),         
        updatePerson(person){
             this._updatePerson(person).then( () => {
                this.$router.push('/secret/Persons')
                 })                       
        },
        addPerson(person){
            this._addPerson(person);            
        },
        cancelarPerson(){
            this.$router.push('/secret/Persons')
        }
    }
       

}
</script>