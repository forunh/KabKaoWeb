"use strict";
var User = (function () {
    function User(id, username, password, confirm_passwrod, firstname, surname, email, address) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.confirm_passwrod = confirm_passwrod;
        this.firstname = firstname;
        this.surname = surname;
        this.email = email;
        this.address = address;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map