<template>
    <b-row class="mb-2">
       
        <b-col cols="4"> {{ question.titulo }} </b-col>
        <b-col cols="2"> {{ question.descripcion }}  </b-col>

        <b-col>
            <b-button variant="primary" @click="goToUpdateQuestion"> Editar </b-button>
            <b-button variant="warning" @click="updateStatusQuestion"> Estado </b-button>
            <b-button variant="danger" @click="deleteQuestion"> Eliminar </b-button>
        </b-col>
    </b-row>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
    name: 'QuestionItem',
    props:{
        question: {
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapActions('question', {
            _updateStatusQuestion: 'updateStatusQuestion',
            _deleteQuestion: 'deleteQuestion'
        }),
        ...mapMutations('question', ['setQuestion']),
        goToUpdateQuestion(){
            this.setQuestion(this.question);            
            this.$router.push({
                name: 'QuestionUpdate',
                params: { id: this.question.questionId }
            });
            
        },
        updateStatusQuestion(){
            this._updateStatusQuestion(this.question);
        },
        deleteQuestion(){
            this._deleteQuestion(this.question)
        }
    }
}
</script>