<template>
	<div>
		<h2>PLEASE REGISTER YOURSELF!!!</h2>
		<form v-on:submit.prevent="submitUserInfo">
			<input placeholder="name" v-model="name" />
			<br />
			<input placeholder="email" v-model="email" />
			<br />
			<input type="password" placeholder="password" v-model="password" />
			<br />
			<button type="submit">REGISTER</button>
		</form>
		<!-- {{ userInfo }} -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: null,
			email: null,
			number: null,
			password: null,
			userInfo: [],
			reg: {},
		};
	},
	// async created() {

	// },
	methods: {
		submitUserInfo(event) {
			const data = event.target;
			for (let i = 0; i < data.length; i++) {
				this.userInfo.push(data[i].value);
			}
			const res = this.$axios
				.$post("http://127.0.0.1:3333/add_users", this.userInfo)
				.then((res) => this.$router.push({ path: "/login" }));
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