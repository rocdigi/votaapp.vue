import Vue from 'vue';

export async function fetchQuestions({ commit }){
    await Vue.axios.get('/api/questions').then( ({ data }) => {
        commit('setQuestions', data.questions);
    }).catch(err => {
        commit('QuestionsError', err.message);
    }).finally(() => {
        console.log("Petición de fetchQuestions resuelta");
    });
}

export async function fetchQuestion({ commit }){
    await Vue.axios.get(`/api/questions/${ question.questionId }`).then( ({ data }) => {
        commit('setQuestion', data);
    }).catch(err => {
        commit('QuestionsError', err.message);
    }).finally(() => {
        console.log("Petición de fetchQuestion resuelta");
    });
}

export async function addQuestions({ commit, dispatch }, question){
    await Vue.axios.post('/api/questions', {
        tipoPregunta: question.tipoPregunta,
        fecha: Date.now(),
        titulo: question.titulo,
        descripcion: question.descripcion,
        estado: true
    }).catch( err => {
        commit('QuestionsError', err.message);
    }).finally(() => {
        dispatch('fetchQuestions');
        console.log("Petición de addQuestions resuelta");
    });
}

export async function updateQuestion({ commit }, question){
    await Vue.axios.put(`/api/questions/${ question.questionId }`, {
        tipoPregunta: question.tipoPregunta,
        titulo: question.titulo,
        descripcion: question.descripcion,
        estado: question.estado
    }).catch( err => {
        commit('questionsError', err.message);
    }).finally(() => {
        console.log("Petición de updateTodo resuelta");
    });
}

export async function updateStatusQuestion({ commit, dispatch }, question){
    await Vue.axios.put(`/api/questions/${ question.questionId }`, {
        tipoPregunta: question.tipoPregunta,
        titulo: question.titulo,
        descripcion: question.descripcion,
        estado: !question.estado
    }).catch( err => {
        commit('questionsError', err.message);
    }).finally(() => {
        dispatch('fetchQuestions');
        console.log("Petición de updateStatusQuestion resuelta");
    });
}

export async function deleteQuestion({ commit, dispatch }, question){
    await Vue.axios.delete(`/api/questions/${ question.questionId }`)
                    .catch( err => {
                        commit('questionsError', err.message);
                    }).finally(() => {
                        dispatch('fetchQuestions');
                        console.log("Petición de deleteQuestion resuelta");
                    });
}