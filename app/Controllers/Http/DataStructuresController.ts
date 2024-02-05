// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DataStructuresController {
    public async introduction({request, response}){
        let d :any = request;
        console.log(d)
        let data = [{question:'what is Dsa'},{question:'what is Algorithm'}]
        return response.json({
            'data':data,
            'error':'',
            status:true
        })
    }
}
