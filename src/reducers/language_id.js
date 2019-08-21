var initialState = 27;

const language_id = (state = initialState , action) =>{
    switch (action.type) {
        case 'CHANGE_LANGUAGE_ID':
            return action.text
        default:
            return state;
    }
}
export default language_id;