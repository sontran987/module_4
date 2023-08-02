import { DeleteUsers, GetUsers } from "../service/userService";

export const fakeLogin = () => {
    return async dispatch => {
        dispatch(GetUser());
        
    };
};
 
export const GetUser = () => {
    return async dispatch => {
        const data = await GetUsers();
        dispatch({
            type: "USER_LIST",
            payload: data
        });
       
    }

};
export const DeleteUser = (id) => {
    return async (dispatch) => {
        await DeleteUsers(id);
        // console.log(id);
        const data = await GetUsers();
        dispatch({
            type: "DELETE_USER",
            payload: data
        });
    };

};

