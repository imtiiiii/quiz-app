<template>
	<div>
		<div id="nav" style="display: flex">
			<nuxt-link to="/"><button>Home</button> </nuxt-link>
			<section v-if="this.$store.state.user.isLoggedIn === true">
				<button @click="logout" style="margin-left: auto">
					Logout
				</button>
				<nuxt-link to="/history">
					<button style="margin-left: auto">History</button>
				</nuxt-link>
				<nuxt-link to="/search">
					<button style="margin-left: auto">Search</button>
				</nuxt-link>
			</section>
		</div>
		<Nuxt />
	</div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
	computed: {},
	methods: {
		logout() {
			const res = this.$axios
				.post("http://localhost:3333/logout")
				.then((res) => {
					this.$store.dispatch("checkUser");
					this.$router.push("/");
				});
		},
	},
};
</script>

<style scoped>
#nav {
	height: 100px;
	border: 2px solid slateblue;
	background-color: slateblue;
}
button {
	width: 150px;
	padding: 10px 10px;
	background-color: #50af4c;
	margin: 10px 50px;
	color: white;
	height: 60px;
}
</style>
