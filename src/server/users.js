

export const usersRoute = app=>{

    var request = require("request");
    app.post('/',(req,res)=>{
        
        request("https://reqres.in/api/users?page=2", function (err, body) {
            if (!err) {
                var ultrabody=JSON.parse(body.body);
                var response={
                    users: ultrabody.data,
                }
                res.send(response);   
            }
            else{
                res.send(err);
            }
        });
    });
}