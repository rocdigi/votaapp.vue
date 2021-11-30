<template>
    <div v-if="questions.length">

        <QuestionItem v-for="question in questions"
            :key="question.questionId"
            :question="question"
        ></QuestionItem>
    </div>
    <b-alert v-else show variant="info">
        No hay questions
    </b-alert>
</template>

<script>
import QuestionItem from './QuestionItem.vue'
import { BAlert} from 'bootstrap-vue'

export default {
    name: "QuestionList",
    components: { QuestionItem , BAlert},
    props: {
        questions: {
            type: Array,
            required: true
        }
    }
}
</script>