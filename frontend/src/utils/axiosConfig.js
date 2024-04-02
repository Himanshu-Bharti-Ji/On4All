export const base_url = "http://localhost:5000/api/v1";

const getTokenFromLocalStorage = localStorage.getItem("customer") ? JSON.parse(localStorage.getItem("user")) : null;

export const config = {
    headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.data.accessToken : ""}`,
        Accept: "application/json"
    }
}