import * as api from '../../api'
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../../constants/actionTypes';

// action creators

// action to get all posts

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts();
        const action = { type: FETCH_ALL, payload: data }
        dispatch(action)
    } catch (error) {
        console.log("error at getPosts action", error);
    }
}

// action to create post

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

// action to update a post

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

// action to delete a post

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error)
    }
}

// action to like a post

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id)
        dispatch({ type: LIKE, payload: data });
    } catch (error) {
        console.log(error)
    }
}