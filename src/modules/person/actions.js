import Vue from 'vue';

export async function deletePerson({ commit, dispatch }, person){
    await Vue.axios.delete(`/api/persons/${ person.personId }`)
                    .catch( err => {
                        commit('questionsError', err.message);
                    }).finally(() => {
                        dispatch('fetchQuestions');
                        console.log("Petición de DeletePerson resuelta");
                    });
}
export async function addPerson({ commit, dispatch }, person){
    await Vue.axios.put(`/api/persons/${ person.personId }`, {
        nombre: person.nombre,
        email: person.email,
        email: person.email,
    }).catch( err => {
        commit('PersonsError', err.message);
    }).finally(() => {
        dispatch('fetchPersons');
        console.log("Petición de addPerson resuelta");
    });
}


export async function updatePerson({ commit }, person){
    await Vue.axios.put(`/api/persons/${ person.personId }`, {
        nombre: person.nombre,
        email: person.email,
        rol: person.rol
    }).catch( err => {
        commit('personsError', err.message);
    }).finally(() => {
        //dispatch('fetchPersons');
        console.log("Petición de updatepersona resuelta");
    });
}

export async function fetchPersons({ commit }){
    await Vue.axios.get('/api/persons').then( ({ data }) => {
        commit('setPersons', data.persons);
    }).catch(err => {
        commit('PersonsError', err.message);
    }).finally(() => {
        console.log("Petición de fetchPersons resuelta");
    });
}