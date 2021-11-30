export function setError(state, error){
    state.error = true;
    state.errorMessage = error;
    state.personData = null;

}

export function setPersons(state, _persons){
    state.persons = _persons;
}
