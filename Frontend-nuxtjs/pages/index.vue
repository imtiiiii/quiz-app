<template>
	<div class="home-parent-div">
		<nuxt-link to="/register"><button>Register</button></nuxt-link>
		<nuxt-link to="/login"><button>Login</button></nuxt-link>
		<nuxt-link to="/quiz"><button>Play Quiz</button></nuxt-link>
	</div>
</template>

<script>
export default {
	name: "home",
	head() {
		title: "home";
	},
	data() {
		return {};
	},
	methods: {},
};
</script>

<style scoped>
.home-parent-div {
	/* border: 2px solid salmon; */
	height: 80vh;
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
}
button {
	width: 150px;
	padding: 10px 5px;
	background-color: #50af4c;
	margin: 10px 50px;
	color: white;
	height: 60px;
}
</style>