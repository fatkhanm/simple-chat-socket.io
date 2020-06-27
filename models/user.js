users = []

module.exports = class user{
    constructor(id,nama,room){
        user = {
            id : id,
            nama : nama,
            room : room
        };
    }
    save(){
        users.push(this.user);
        console.log(users);
    }
}