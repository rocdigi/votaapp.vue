export function setPerson(state, playload){
    state.personData = playload.person;
    state.token = playload.token;
    state.isLogged = true;
    state.error = false;
    state.errorMessage =  "";
}

export function logout(state){
    state.personData = null;
    state.token = null;
    state.isLogged = false;
}

export function setError(state, error){
    state.error = true;
    state.errorMessage = error;
    state.personData = null;
    state.token = null;
    state.isLogged = false;
}