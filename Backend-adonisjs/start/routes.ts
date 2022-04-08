/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import UsersController from 'App/Controllers/Http/UsersController'

import QuestionsController from 'App/Controllers/Http/QuestionsController'
import UserChoicesController from 'App/Controllers/Http/UserChoicesController'
import QuizResultsController from 'App/Controllers/Http/QuizResultsController'
import KeywordsController from 'App/Controllers/Http/KeywordsController'

Route.get('/', async () => {
  return "im running"
})
// show all users
Route.get("/users", "UsersController.show")
// get single user
Route.get("/users/:id", "UsersController.index")
// post  users
Route.post("/add_users", "UsersController.store")
// post questions
Route.post("/admin/add_questions/", "QuestionsController.store")
// post options for a question
Route.post("/admin/add_options/", "OptionsController.store")

// store user's choice
Route.post("/quiz/user_choice/", "UserChoicesController.store")
// store quiz result
Route.post("quiz/result/", "QuizResultsController.store")
// show user's playing history
Route.get("/history", "QuizResultsController.show")

// show result
Route.get("/result/:question_id/:user_id/:test_no", "UserChoicesController.result")
// show questions
Route.get("/questions", "QuestionsController.show")
// show options
Route.get("/options", "OptionsController.show")
// update user table 
Route.put("/update/users/:id", "UsersController.update")
// login user
Route.post("/login", "UsersController.login")
Route.get("/get_user", "UsersController.getUser")
Route.post("logout", "UsersController.logout")
// check result
Route.get("/check_result/", "UserChoicesController.check")

// post keywords
Route.post("/keywords/", "KeywordsController.store")
// show keywords
Route.get("/keywords/", "KeywordsController.show")

