
class Authentication {
    constructor(){
        this.authenticated = false;
        this.user = {
            id: '',
            name: '',
            email: ''
        }
    }

/*     async checkUser(){
        const response = await fetch('http://localhost:8000/checkUser', {
            method: 'get',
            headers: new Headers({
            Authorization: `bearer ${localStorage.getItem('token')}`
            })
        })

        const userObject = await response.json();


        this.user.id = userObject.authData.currentUser.id;
        this.user.name = userObject.authData.currentUser.name;
        this.user.email = userObject.authData.currentUser.email;

        Promise.resolve(this.user);
    } */

    async register(name, email, password){
        //consider try catch block
        const response = await fetch('https://rocky-earth-38750.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name.toLowerCase(),
                email: email.toLowerCase(),
                password: password   
            })
        })

        const userObject = await response.json();

        if(userObject.status === 200){
            this.user.id = userObject.user.id;
            this.user.name = userObject.user.name;
            this.user.email = userObject.user.email;
            this.authenticated = true;
            Promise.resolve()
        }else{
            this.authenticated = false;
        }
    }

    
    async login(email, password){
    //async method returns a promise
    //when the async method returns a value, the
    //promise will be resolved with the value.

    //await allows us to wait for the response of an asynchronous request
    //will return value only after promise is resolved
    //promise has three states: pending, fullfilled + rejected
        const response = await fetch('https://rocky-earth-38750.herokuapp.com/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const userObject = await response.json();
        if (userObject.status === 200) {
            this.user.id = userObject.user.id;
            this.user.name = userObject.user.name;
            this.user.email = userObject.user.email;
            this.authenticated = true;
            //Promise.resolve is a method that returns a promise object
            Promise.resolve(this.user);
        }
        else {
            this.authenticated = false;
        }
    }

    logout(cb){
        this.authenticated = false;
        this.user.id = '';
        this.user.name = '';
        this.user.email = '';
        cb()
    }

    isAuthenticated(){
        return this.authenticated;
    }
}

export default new Authentication();