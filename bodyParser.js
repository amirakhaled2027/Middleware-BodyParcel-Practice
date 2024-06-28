const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json);
const Users = [ ];


//Read
app.get('/users', function(req, res) {
    res.json({Users: Users, Message: "Done"})
});


//Create
app.post('/users', function(req, res) {
    Users.push(req.body);
    res.json('User added successfully')
});


//Update
app.put("/users", async function(req, res) {
    let {name, email} = req.body;

    await Users.find((usr, index) => {
        if(usr.name === name) {
            Users[index] = {name: usr.name, phone: usr.phone, email: email}
        }
        return true;
    })
})

res.json({Message: "user updated successfully"});


//Delete a user
app.delete("/users", async function(req, res){
    let {name} = req.body;

    await Users.find((usr, index) => {
        if(Users.index === name) {
            Users.splice(Users[index], 1)
        }
        return true
    });
});

res.json({Message: "User deleted successfully"});



