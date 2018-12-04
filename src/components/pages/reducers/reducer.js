import * as actionType from '../actions/actionTypes';

const defaultState = {
    list: [],
    posts: [],
    comments: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.ADD_USER_LIST:
            return { ...state, list: [...action.list] }
        case actionType.ADD_POST_LIST:
            var newPosts = [...state.posts];
            let posts = action.posts
            newPosts.push(posts);
            return { ...state, posts: newPosts }
        case actionType.ADD_COMMENT_LIST:
            var newComments = [...state.comments];
            let comments = action.comments
            newComments.push(comments);
            return { ...state, comments: newComments }
        default:
            return state;
    }
}