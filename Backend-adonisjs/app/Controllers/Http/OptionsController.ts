import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Option from 'App/Models/Option';

export default class OptionsController {
    // store options for a question
    public async store({ request }: HttpContextContract) {
        const data = request.body();
        return await Option.create(data);
    }
    // show options
    public async show() {

        const data = await Option.query().select("id", "option", "question_id").orderBy("id")
        return (data)
    }
}
