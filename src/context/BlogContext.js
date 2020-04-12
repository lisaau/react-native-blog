import createDataContext from './createDataContext';

// create reducer
const blogReducer = (state, action) => {
    switch(action.type) {
        case 'delete_blogpost':
            return state.filter(blogpost => blogpost.id !== action.payload);
        case 'add_blogpost':
            return [
                ...state, 
                { 
                    id: Math.floor(Math.random() * 99999), 
                    title: `Blog Post #${state.length + 1}` 
                }
            ];
        default:
            return state;
    }
};

// function that will dispatch an action that's going to modify the reducer
const addBlogPost = dispatch => {
    return () => {
        dispatch({ type: 'add_blogpost' });
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    };
}

// call createDataContext to pass in reducer, object with different actions, and initial state
// get Context and Provider that will make dat available to other parts of app
export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost },
    []
);