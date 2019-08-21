var initialState = 'default';

const theme = (state = initialState , action) =>{
    switch (action.type) {
        case 'CHANGE_THEME':
            return action.text
        default:
            return state;
    }
}
export default theme;