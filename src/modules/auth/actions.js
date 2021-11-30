import Vue from 'vue';

export async function signIn({ commit }, person){
    commit('setLoading', true, { root: true })
    return Vue.axios.post('/api/persons/login', person).then(res => {
        commit('setPerson', res.data);
    }).catch(err => {
        commit('setError', err.msg);
    }).finally(() => {
        commit('setLoading', false, { root: true })
    })
}

