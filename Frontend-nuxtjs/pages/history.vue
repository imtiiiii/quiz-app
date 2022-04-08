<template>
	<div>
		<h3>welcome to your history {{ user.name }}</h3>
		<!-- {{ results }} -->
		<section v-for="(result, index) in results" v-bind:key="index">
			<div style="display: flex">
				<h1 style="margin: 0px 20px">test no : {{ result.test_no }}</h1>
				<h1 style="margin: 0px 20px">Marks : {{ result.marks }}</h1>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: "",
			results: undefined,
		};
	},
	mounted() {
		if (this.$store.state.user.isLoggedIn === false) {
			this.$router.push("/");
		}
		// this.result = history;
	},
	async created() {
		if (this.$store.state.user.isLoggedIn === true) {
			this.user = this.$store.state.user.user;
			const history = await this.$axios.$get(
				`http://localhost:3333/history?id=${this.user.id}`
			);
			// console.log("i am history = ", history);
			this.results = history;
		}
	},
};
</script>

<style>
</style>