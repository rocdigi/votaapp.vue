<template>
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Email</th>
      <th scope="col">Estado</th>
      <th scope="col">Rol</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="persons in personsList" :key="persons.personId">
      <th scope="row">{{persons.nombre}}</th>
      <td>{{persons.email}}</td>
      <td>{{persons.estado}}</td>
      <td>{{persons.rol}}</td>
       <td><b-button variant="primary" @click="editarPerson(persons.personId)"> Editar </b-button>            
            <b-button variant="danger" @click="deletePerson(persons)"> Eliminar </b-button>
        </td>
    </tr>   
  </tbody>
</table>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    name:"Persons",
    data(){
        return {
            personsList: []
        }
    },
    mounted(){
        this.axios.get('/api/persons').then(res => {
            this.personsList = res.data.persons;
        })
    },
     methods: {
        ...mapActions('person', {
            //_addPerson: 'addPerson',
            _deletePerson: 'deletePerson'
        }) ,              
        deletePerson(person){    
            console.log(person)       
            this._deletePerson(person)
        }
        ,editarPerson(id){            
            this.$router.push({
                name: 'EditPerson',
                params: { id: id }
            });
        }
      
        
    
    }
}
</script>