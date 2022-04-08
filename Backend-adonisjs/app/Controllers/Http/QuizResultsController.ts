import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import QuizResult from 'App/Models/QuizResult';

export default class QuizResultsController {
    public async store({ request, response }: HttpContextContract) {
        const data = request.body();
        const result = await QuizResult.create(data);
        return result
    }
    public async show({ request, response }: HttpContextContract) {
        const id = parseInt(await request.qs().id);
        // console.log("id= ", typeof id, id)
        const result = await QuizResult.query().where("user_id", id)
        return result
    }
}
