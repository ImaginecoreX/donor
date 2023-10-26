class AdminData {
    constructor(){
        // this._email = email;
        // this._fname = fname;
        // this._lname = lname;
        // this._password = password;
    }

    get email(){
        return this._email;
    }

    set email(newEmail){
        this._email = newEmail;
    }

    get fname(){
        return this._fname;
    }

    set fname(newFname){
        this._fname = newFname;
    }

    get lname(){
        return this._lname;
    }

    set lname(newLname){
        this._lname = newLname;
    }
    get password(){
        return this._password;
    }

    set password(newPassword){
        this._password = newPassword;
    }

}

export default AdminData