<template>
	<div>
		<!-- <h1>search</h1> -->
		<section id="parent">
			<input type="text" @keyup="searching" placeholder="search" />
			<div v-for="(element, index) in search" :key="index">
				<button>{{ element.text }}</button>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			search: [],
		};
	},
	methods: {
		async searching(e) {
			const value = e.target.value;
			if (value.length > 1) {
				console.log(value);
				try {
					const search = await this.$axios.$get(
						`/keywords?value=${value}`
					);
					console.log(search);
					this.search = search;
				} catch (error) {
					console.log(error);
				}
			}
		},
	},
};
</script>

<style scoped>
#parent {
	height: 100vh;
	border: 1px solid black;
	width: 60%;
	margin: 0 auto;
}
input {
	/* display: block; */
	margin: 30px 5px;
	width: 250px;
	padding: 20px 5px;
	border-radius: 5px;
}
button {
	width: 100px;

	background-color: #50af4c;
	margin: 10px 0px;
	color: black;
	height: 30px;
}
</style>