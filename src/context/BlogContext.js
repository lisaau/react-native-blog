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
        /*
        don't need add_blogpost if not using dispatch in addBlogPost
        since the callback will navigate back to IndexScreen and in that screen
        we re-render the posts/refresh the page

        case 'add_blogpost':
            return [
                ...state, 
                { 
                    id: Math.floor(Math.random() * 99999), 
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];
        */

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
    return async id => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'delete_blogpost', payload: id })
    };
}

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content })

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