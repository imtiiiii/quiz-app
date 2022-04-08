import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserChoice from 'App/Models/UserChoice';
import Option from 'App/Models/Option';
import User from 'App/Models/User';

export default class UserChoicesController {
    public async store({ request, response }: HttpContextContract) {
        const data = request.body();
        for (let i = 0; i < data.length; i++) {
            await UserChoice.create(data[i]);
        }


    }
    public async check({ response, params, request }: HttpContextContract) {

        // console.log(typeof request.qs().id)
        const id = parseInt(request.qs().id);
        const test_no = parseInt(request.qs().test_no);
        // console.log("id= ", typeof id, id);
        console.log("test= ", typeof test_no, test_no);
        const data = await UserChoice.query().where("user_id", id).where("test_no", test_no)
            .preload("option")





        return data;
    }
}



