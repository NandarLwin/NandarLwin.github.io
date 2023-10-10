window.onload = () => {
    /* 1 */
    //Reason: ok() and fail() does not have any reference type. When it is called, reference type is window.
   
    function askPassword(ok, fail) {

        let password = prompt ("Password?", "");
        if (password == "rockstar") 
        ok();
        else fail();
       }
       
        let user = {
           name: 'John',
       
           loginOk() {
               alert (`${this.name} logged in`);
           },
           loginFail() {
               alert ( `${this.name} failed to logged in`);
           }
        };
        //wrapper
       askPassword(() => user.loginOk(), () => user.loginFail());
       // call
       askPassword(() => user.loginOk.call(user), () => user.loginFail.call(user));
       //apply
       askPassword(() => user.loginOk.apply(user), () => user.loginFail.apply(user));
       // bind
       askPassword(() => user.loginOk.bind(user), () => user.loginFail.bind(user));

       /* 2 */
       let group = {
        title: "Our Group",
        students: ["John", "Pete", "Alice"],
        showList: function() {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student);
        }.bind(this));
        }
        };

        group.showList();

}
