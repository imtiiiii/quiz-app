import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';
import authConfig from 'Config/auth';
import auth from 'Config/auth'
export default class UsersController {
    // register/store user
    public async store({ request, auth, response }: HttpContextContract) {

        const data = request.body();
        // console.log(data[0]);
        // const name = data[0]
        // const email = data[1]
        // const number = data[2];
        // const psd = data[3]
        // console.log(name, email, number, psd)
        const userInfo = {
            name: data[0],
            email: data[1],
            password: data[2]

        }
        console.log("im called", userInfo)
        const user = await User.create(userInfo)
        await auth.use("web").login(user)

        return auth.toJSON();

    }
    public async login({ response, request, auth }: HttpContextContract) {
        const data = request.body();
        console.log(data);
        try {
            await auth.use("web").attempt(data.email, data.password)
            return auth.toJSON();
        } catch {
            return auth.toJSON();
        }


    }
    public async getUser({ auth }: HttpContextContract) {
        const data = await auth.use('web')
        // console.log(data)
        return data
    }
    public async logout({ auth }: HttpContextContract) {
        const data = await auth.use("web").logout();
        return data;
    }
    public async index({ request, response, params }: HttpContextContract) {
        const user = await User.query().where("id", params.id);
        return user;
    }
    public async update({ request, params }: HttpContextContract) {
        const user = await User.query().where("id", params.id).update(request.body())
    }
}
