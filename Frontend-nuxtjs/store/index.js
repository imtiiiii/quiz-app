export const state = () => ({
    user: {}

})

export const mutations = {
    checkAuth(state, data) {
        // console.log(data)
        state.user = data
        // console.log(state.user)
    }
}
export const actions = {
    async nuxtServerInit({ commit }, { }) {
        const res = await this.$axios.$get("http://localhost:3333/get_user")

        commit("checkAuth", res)
    },
    async checkUser({ commit }) {
        const res = await this.$axios.$get("http://localhost:3333/get_user")
        commit("checkAuth", res)
        // console.log("im called")
    }
}