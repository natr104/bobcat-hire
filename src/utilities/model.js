class Model {

    constructor() {
        this.configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }
    }
    save() {
        //basic json post op
    }
}

class User extends Model {
    constructor(name, email, address, phone_no) {
        super();
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone_no = phone_no;
    }
}