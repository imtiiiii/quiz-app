import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Keyword from 'App/Models/Keyword';

export default class KeywordsController {
    // store keyword
    public async store({ request }: HttpContextContract) {
        const data = request.body();
        console.log(data);
        const store = await Keyword.create(data);
        return store;
    }
    // show keyword
    public async show(ctx: HttpContextContract) {
        const value = ctx.request.qs().value
        console.log("value=", value)
        const keywords = await Keyword.query()
            .where("text", "like", `%${value}%`).distinct("text")

        return keywords;

    }

}
