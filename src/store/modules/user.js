import {
    getLocalStorage,
    setLocalStorage,
    removeLocalStorage
} from "@/utils/storage";
import { ipost } from "@/utils/api";
import { resetRouter } from "@/router";

const state = {
    token: "",
    user: {}
};

const mutations = {
    SET_TOKEN: (state, token) => {
        setLocalStorage("token", token);
        state.token = token;
    },
    SET_USER: (state, user) => {
        state.user = user;
        setLocalStorage("user", JSON.stringify(user));
    }
};

const actions = {
    // user login
    login({ commit }, userInfo) {
        const { username, password } = userInfo;
        return new Promise((resolve, reject) => {
            commit("SET_TOKEN", "test");
            commit("SET_USER", { "uid": 1 });
            resolve();
            return

            ipost("Login", {
                username: username.trim(),
                password: password
            })
                .then(response => {
                    const { data } = response;

                    commit("SET_TOKEN", data.token);
                    commit("SET_USER", data);

                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    // get user info
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            let user = JSON.parse(getLocalStorage(user));
            commit("SET_USER", user);
            resolve();
        });
    },

    // user logout
    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            commit("SET_TOKEN", "");
            removeLocalStorage();
            resetRouter();
            resolve();
        });
    },

    // remove token
    resetToken({ commit }) {
        return new Promise(resolve => {
            commit("SET_TOKEN", "");
            removeLocalStorage();
            resolve();
        });
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
