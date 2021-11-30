<template>
    <b-row class="mt-5">        
        <b-col cols="12">
            <h2>Listado de Preguntas</h2>
            <QuestionList :questions="activado"></QuestionList>
        </b-col>
    </b-row>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import QuestionList from '../components/question/QuestionList.vue'

export default {
    name: "Questions",
    components: {
        QuestionList
    }, 
    computed: {
         ...mapGetters('question', ['activado'])
    },  
    created(){
        this.fetchQuestions();
    },    
    methods: {
        ...mapActions('question', ['fetchQuestions'])
    }
}
</script>