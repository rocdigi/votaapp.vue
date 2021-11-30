export function desactivado(state){    
    return state.questions.filter(question => !question.estado);
}

export function activado(state){
    
    return state.questions.filter(question => question.estado);
}