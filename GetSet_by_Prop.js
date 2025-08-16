function User(Name, Email){
    this._Name = Name;
    this._Email = Email;


    Object.defineProperty(this, 'Email' ,{
        get : function(){
            return this._Email;
        },
        set : function(email){
            this._Email = email;
        }
    })
    Object.defineProperty(this, 'Name' ,{
        get : function(){
            return this._Name;
        },
        set : function(newName){
            this._Name = newName;
        }
    })
}
var user = new User('Ajay', 'Pirate@example.com');
console.log(user.Email);
console.log(user.Name);
user.Email = 'NewEmail@example.com';
user.Name  = "Vijay Malya";
console.log("New Updated User Email : ", user.Email);
console.log("New Updated User Name : ",user.Name);


