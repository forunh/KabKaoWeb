export class User {
    constructor(
        public id: number,
        public username: string,
        public password: string,
        public confirm_passwrod: string,
        public first_name: string,
        public last_name: string,
        public email: string,
        public address: string,
    ) {}
}