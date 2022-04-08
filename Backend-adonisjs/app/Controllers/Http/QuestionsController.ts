import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Question from "App/Models/Question";

export default class QuestionsController {
    public async store({ request }: HttpContextContract) {
        console.log("question called")
        const data = request.body();
        return await Question.create(data);

    }
    public async show() {
        return Question.query().orderBy("id")
    }
}
