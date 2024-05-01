import axios from "axios";
import { ReduxStore } from "./store";
import { baseUrl } from "../../App";


const dispatch=ReduxStore.dispatch


export function fetchDashboardDetails(token,name=null) {
    return () => {
        dispatch({
            type: "DATA_REQUEST"
        });

        let url = `${baseUrl}/admin/dashboard`;
        if (name) {
            url = `${baseUrl}/admin/search?name=${name}`;
        }

        axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            dispatch({
                type: "DATA_SUCCESS",
                payload: response.data
            });
        })
        .catch(error => {
            console.error(error);
            dispatch({
                type: "DATA_FAILURE",
                payload: error.message
            });
        });
    };
}




