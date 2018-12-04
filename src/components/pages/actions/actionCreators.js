import * as action from './actionTypes'

export const addUserList = (state) => {
    return {
        type: action.ADD_USER_LIST,
        list: state
    }
}

export const addPostList = (id, state) => {
    return {
        type: action.ADD_POST_LIST,
        posts: {
            id: id,
            state: state 
        }
    }
}

export const addCommentList = (id, state) => {
    return {
        type: action.ADD_COMMENT_LIST,
        comments: {
            id: id,
            state: state
        }
    }
}