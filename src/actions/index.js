import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPost()); // await makes sure that we wait for get that api request before moving on
    
    const userIds =_.uniq(_.map(getState().posts, 'userId')); // map will give an array of all the different Ids and uniq gives all the unique Ids
    userIds.forEach(id => dispatch(fetchUser(id))); // this loops through all the id and calls fetchuser for each unique id
    
//     _.chain(getState().posts) // allows us to chain on additional functions
//         .map('userId') // the first parameter passed in map is the result from the previous, so we only need to add 'userId'
//         .uniq()
//         .forEach(id => dispatch(fetchuser(id)))
//         .value() // this last one is like return 
// };




export const fetchPost =  () => async dispatch => { // we are returning a function that returns a function
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type:'FETCH_POSTS', payload: response.data })
    
};

// export const fetchUser = id => dispatch =>  _fetchUser(id, dispatch);

// const _fetchUser = _.memoize( async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({type: 'FETCH_USER', payload: response.data });
// });

export const fetchUser = id => async dispatch => {

    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: response.data });
};
