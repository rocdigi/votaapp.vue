<template>
<div>
    <div class="mb-3 cols-9 border px-5 "  >  
    <b-form class="mt-5" @submit.prevent="$emit('submitForm', question)">
                  
             
            <b-form-group id="tiposPreguntas" label="Tipo Pregunta:" label-for="tipoPregunta">
                <b-form-input name="tipoPregunta" 
                v-model="question.tipoPregunta" 
                list="tipoPreguntas" 
                id="tipoPregunta"
                required></b-form-input>
                <b-form-datalist  id="tipoPreguntas" :options="options"
                ></b-form-datalist>
            </b-form-group>

        <b-form-group class="m-2"
        label="Pregunta"
        >
            <b-form-input
                id="titulo"
                name="titulo"
                v-model="question.titulo"
                type="text"
                placeholder="Introduce el Titulo"
                          
            ></b-form-input>            
           
            </b-form-group>
        <b-form-group class="m-2"
        label="Descripcion"
        >
            <b-form-input
                id="descripcion"
                name="descripcion"
                v-model="question.descripcion"
                type="text"
                placeholder="Introduce el descripcion"
                          
            ></b-form-input>            
        <div class="work-experiences">

        <div class="form-row" v-for="(experience, index) in workExperiences" :key="index">
          <div class="form-group col-md-6">
            <label>Opciones</label>
            <input v-model="experience.company" :name="`workExperiences[${index}][company]`" type="text" class="form-control" placeholder="Opciones ">
          </div>           
        </div>
      </div>

      <div class="form-group">
        <button @click="addExperience" type="button" class="btn btn-secondary">Add Options</button>
         <button @click="deleteExperience" type="button" class="btn btn-secondary">DElete Options</button>
      </div>

      <div class="form-group">
        <button @click="submit" type="button" class="btn btn-primary">Submit</button>
      </div> 
                <b-button type="submit"
                class="mt-4"
                variant="primary"
                
            >
                {{ submitText }}
            </b-button>
            
        </b-form-group>
       
         <h1></h1>
    </b-form>
     
     </div>
     
       </div>
</template>

<script>
import { BForm, BFormGroup, BFormInvalidFeedback, BFormInput, BButton , BFormSelect, BFormDatalist} from 'bootstrap-vue'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
    data(){
        return{
            options: ['Seleccion Multiple', 'Quiz', 'True or False']   ,
            workExperiences: [
            {
                Opcion: ""
            }
        ]         
        }        
        
    },
    
    name: 'QuestionForm',
    components: {
        BForm, BFormGroup, BFormInvalidFeedback, BFormInput, BButton,BFormSelect, BFormDatalist
    },
    props:{
        question: {
            type: Object,
            required: true
        },
        submitText: {
            type: String,
            default: 'Crear Question'
        }
    },
    methods: {
    addExperience () {
      this.workExperiences.push({
        company: '',        
      })
    },
    deleteExperience () {
      this.workExperiences.splice(2,l )
    },

    submit () {
      const data = {
        workExperiences: this.workExperiences
      }
      alert(JSON.stringify(data, null, 2))
    }
  },
    validations: {
        question: {
            text: {
                required, minLength: minLength(4)
            }
        }
    }
}
</script>

<style>
.work-experiences > div {
  margin: 20px 0;
  padding-bottom: 10px;
}
.work-experiences > div:not(:last-child) {
  border-bottom: 1px solid rgb(206, 212, 218);
}
</style>
