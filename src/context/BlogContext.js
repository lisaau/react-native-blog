import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

// create reducer
const blogReducer = (state, action) => {
    switch(action.type) {
        case 'get_blogposts':
            return action.payload;
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id 
                ? action.payload
                : blogPost
            })
        case 'delete_blogpost':
            return state.filter(blogpost => blogpost.id !== action.payload);
        case 'add_blogpost':
            return [
                ...state, 
                { 
                    id: Math.floor(Math.random() * 99999), 
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];
        default:
            return state;
    }
};

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({ type: 'get_blogposts', payload: response.data });
    }
}

// function that will dispatch an action that's going to modify the reducer
const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', { title, content });

        if (callback) {
            callback();
        }
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    };
}

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({ 
            type: 'edit_blogpost',
            payload: { id, title, content }
        });
        callback();
    }
}

// call createDataContext to pass in reducer, object with different actions, and initial state
// get Context and Provider that will make dat available to other parts of app
export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    []
);