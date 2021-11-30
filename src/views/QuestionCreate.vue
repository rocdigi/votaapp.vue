<template>
    <div>
        <h1> Crear Preguntas </h1>
        <question-form :question="question" @submitForm="createQuestion"></question-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import QuestionForm from '@/components/question/QuestionForm.vue'

export default {
    name: 'QuestionCreate',
    data(){
        return {
            question: {                
                titulo: '',
                descripcion:'',
                tipoPregunta: null,
                estado: true
                
        },
        
        show: true
        }
    },
    components: {
        QuestionForm
    },
    methods: {
        ...mapActions('question', ['addQuestions']),
        createQuestion(question){
            this.addQuestions(question).then( () => {
                this.$router.push('/questions');
            })
        }
    }
}
</script>