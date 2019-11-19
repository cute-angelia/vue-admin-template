import request from "@/utils/request";
import { getLocalStorage } from "@/utils/storage";
import axios from "axios";

var routeMap = {
    Login: "admin_system/sso/login",
};

export function ipost(path, data) {
    const z = routeMap[path] || path;
    return request({
        url: z,
        method: "post",
        data
    });
}

export function iget(path, params) {
    const z = routeMap[path] || path;
    return request({
        url: z,
        method: "get",
        params: { params }
    });
}

export function upload(path, data, success, error) {
    const z = routeMap[path] || path;
    const token = getLocalStorage("token");

    axios.post(process.env.VUE_APP_BASE_API + "/" + z, data, {
        timeout: 1800000,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': "Bearer " + token,
        }
    }).then((data) => {
        success(data.data)
    }).catch(function (data) {
        error(data)
    });
}
