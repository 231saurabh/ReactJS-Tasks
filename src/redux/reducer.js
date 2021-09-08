import { CHANGE_BG, CHANGE_BG1, CHANGE_BG2, CHANGE_BG3, CHANGE_BG4, RESET_BG } from './actionTypes';

export const BG_KEY = 'bgStore'

let initialState = {
    color: '#ffffff'
}

let bgReducer = (state = initialState, action) => {
    let { type } = action
    switch (type) {
        case CHANGE_BG:
            return {
                color: '#1ABC9C'
            }

        case CHANGE_BG1:
            return {
                color: '#5E4FDB'
            }

        case CHANGE_BG2:
            return {
                color: '#852121'
            }

        case CHANGE_BG3:
            return {
                color: '#0E4316'
            }

        case CHANGE_BG4:
            return {
                color: '#808080'
            }

        case RESET_BG:
            return {
                color: '#ffffff'
            }

        default: return state
    }

}
export { bgReducer }