<template>
	<div>
		<div id="header">
			<!-- {{ userInfo }} -->
			<h1 style="margin: 20px 0">
				Ready for a quick quiz test ? BEST of luck !!!!!!!!
			</h1>
			<button v-if="ready === false" v-on:click="startQuiz">Start</button>
			<div v-if="ready" class="quiz-section">
				{{ userInfo.test_no + 1 }}
				<form v-on:submit.prevent="submitted">
					<section
						v-for="(question, index) in questions"
						:key="index"
					>
						<h2 style="color: white">
							Question number {{ question.id }} :
							{{ question.question }}
						</h2>
						<section
							v-for="(option, index) in options"
							:key="index"
						>
							<ul v-if="option.question_id === question.id">
								<h3>
									{{ option.option }}
								</h3>
								<input
									type="radio"
									v-bind:value="option.option"
									v-bind:name="option.question_id"
									v-bind:id="question.id"
									v-bind:alt="option.id"
								/>
							</ul>
						</section>
					</section>
					<button type="submit">submit</button>
				</form>
				<div v-if="showMarks">
					<h4>You got : {{ marks }}</h4>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ready: false,
			user_id: null,
			questions: null,
			options: null,
			marks: 0,
			showMarks: false,
			test_no: 0,
			values: {},
			userInfo: null,
			userAns: [],
		};
	},
	mounted() {
		if (this.$store.state.user.isLoggedIn === false) {
			this.$router.push("/");
		} else if (this.$store.state.user.isLoggedIn === true) {
			this.userInfo = this.$store.state.user.user;
			this.test_no = this.userInfo.test_no + 1;
		}
		// console.log("im create", this.userInfo);
	},
	beforeCreate() {},
	async created() {
		// get all questions
		await this.$axios
			.$get("http://localhost:3333/questions")
			.then((res) => {
				this.questions = res;
			});

		// get options of the questions
		await this.$axios.$get("http://localhost:3333/options/").then((res) => {
			this.options = res;
			// console.log(res);
		});
	},

	methods: {
		async startQuiz() {
			// ready is true-> when ready is true user will see the quiz
			this.ready = !this.ready;
		},
		async submitted(event) {
			let userChoice = [];
			// console.log("im called", event);
			let ansList = event.target;
			for (let i = 0; i < ansList.length; i++) {
				if (ansList[i].checked) {
					let info = {
						user_id: this.userInfo.id,
						question_id: ansList[i].id,
						solution_id: ansList[i].alt,
						user_choice: ansList[i].value,
						test_no: this.test_no,
					};
					userChoice.push(info);
					ansList[i].checked = false;
				}
			}

			console.log(userChoice);

			// //storing user submission
			const store = await this.$axios.$post(
				"http://localhost:3333/quiz/user_choice/",
				userChoice
			);

			const countMarks = await this.$axios.$get(
				`http://localhost:3333/check_result?id=${this.userInfo.id}&test_no=${this.test_no}`
			);

			console.log("count marks= ", countMarks);

			for (let i = 0; i < countMarks.length; i++) {
				let correctAns = countMarks[i];
				correctAns = correctAns.option.is_correct;
				if (correctAns) this.marks += 10;
			}

			console.log("marks= ", this.marks);
			// store user result
			const storeResult = await this.$axios.$post(
				"http://localhost:3333/quiz/result/",
				{
					user_id: this.userInfo.id,
					marks: this.marks,
					test_no: this.test_no,
				}
			);
			const updateUserInfo = await this.$axios.$put(
				`http://localhost:3333/update/users/${this.userInfo.id}`,
				{
					test_no: this.test_no,
				}
			);
			this.showMarks = !this.showMarks;
			// this.ready = !this.ready;
		},
	},
};
</script>

<style  scoped>
#header {
	text-align: center;
	border-bottom: 1px solid black;
	padding: 30px 0px;
	border-radius: 10px;
	background-color: #be9fbf;
}
.quiz-section {
	border: 2px solid rgb(131, 113, 246);
	width: 60%;
	margin: 0 auto;
	padding: 20px 10px;
	background-color: #a590dc;
}
button {
	width: 150px;
	padding: 10px 5px;
	background-color: #50af4c;
	margin: 10px 0px;
	color: white;
}
</style>