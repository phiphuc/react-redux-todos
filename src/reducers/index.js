let i = 0
const todosInitialState = [{id: 0, text: 'user redux'}]
const todos = (state = todosInitialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [{id: i +=1, text: action.valueAdd}, ...state]
        case 'DEL_TODO':
            return state.filter(item => item.id !== action.id)
        case 'EDIT_TODO':
            return state.map(item => (todo) => todo.id === action.id ? { ...todo, text: action.text } : todo);
        default:
            return state
    }
}

export default todos