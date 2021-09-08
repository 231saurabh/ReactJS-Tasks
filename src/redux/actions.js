import { CHANGE_BG, CHANGE_BG1, CHANGE_BG2, CHANGE_BG3, CHANGE_BG4, RESET_BG } from './actionTypes'

let changeBg = () => {
    return {
        type: CHANGE_BG,

    }
}

let changeBg1 = () => {
    return {
        type: CHANGE_BG1,
    }
}

let changeBg2 = () => {
    return {
        type: CHANGE_BG2,
    }
}

let changeBg3 = () => {
    return {
        type: CHANGE_BG3,
    }
}

let changeBg4 = () => {
    return {
        type: CHANGE_BG4,
    }
}

let resetBg = () => {
    return {
        type: RESET_BG,
    }
}

export { changeBg, changeBg1, changeBg2, changeBg3, changeBg4, resetBg }