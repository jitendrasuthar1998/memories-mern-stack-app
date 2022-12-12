const reducer = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            console.log("fetch all reducer called")
            return action.payload;

        case 'CREATE':
            return posts;

        default:
            return posts;
    }
}

export default reducer;