
export class LoginController {
    login(request, response) {
        response.render('login');
    }

    async checkUser(req, res) {
        console.log(req.body);
    }

}
