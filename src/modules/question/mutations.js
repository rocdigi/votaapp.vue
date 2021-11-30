export function setQuestions(state, _questions){
    state.questions = _questions;
}

export function setQuestion(state, _question){
    state.selectedQuestion = _question;
}

export function updateQuestionStatus(state, payload){
    const question = state.questions.find(currentQuestion => currentQuestion.id === payload.id);
    if(question){
        question.estado = !question.estado;
    }
}

export function QuestionsError(state, payload){
    state.error = true;
    state.errorMessage = payload;
    state.questions = [];
}