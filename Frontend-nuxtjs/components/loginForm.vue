<template>
	<div>
		<h2>Login</h2>
		<form v-on:submit.prevent="submitUserInfo">
			<input placeholder="email" v-model="email" />
			<br />
			<input type="password" placeholder="password" v-model="password" />
			<br />
			<button type="submit">Login</button>
		</form>
		<!-- <button type="submit" v-on:click="logout">Logout</button>
		{{ email }}
		{{ password }} -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: null,
			password: null,
		};
	},
	// async created() {

	// },
	methods: {
		submitUserInfo() {
			const data = {
				email: this.email,
				password: this.password,
			};
			const res = this.$axios
				.$post("http://localhost:3333/login", data)
				.then((res) => {
					if (res.guards.web.isLoggedIn === true) {
						console.log("sucessfully logged in ");
						this.$store.dispatch("checkUser");
						(this.email = null), (this.password = null);
						this.$router.push("/");
					}
				});
		},
		logout() {
			const res = this.$axios
				.post("http://localhost:3333/logout")
				.then((res) => console.log(res));
		},
	},
};
</script>

<style scoped>
div {
	text-align: center;
	margin: 50px 0px;
}
input {
	/* display: block; */
	margin: 30px 5px;
	width: 250px;
	padding: 30px 5px;
	border-radius: 05px;
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