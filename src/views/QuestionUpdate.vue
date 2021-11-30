<template>
    <div v-if="selectedQuestion">
        <QuestionForm :question="selectedQuestion"
            @submitForm="saveQuestion"
            submitText="Actualizar Question"
        ></QuestionForm>
    </div>
    <b-alert v-else> Question no identificado </b-alert>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import QuestionForm from '../components/question/QuestionForm.vue'

export default {
    name: 'QuestionUpdate',
    components: { QuestionForm },
    computed: {
        ...mapState('question', ['selectedQuestion'])
    },
    methods:{
        ...mapActions('question', ['updateQuestion']),
        saveQuestion(question){
            //console.log(question)
            this.updateQuestion(question).then( () => {
                this.$router.push({ name: 'Questions',
                 })
            })
        }
    }
}
</script>