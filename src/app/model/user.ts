export class User {
    constructor(
        public id: number,
        public username: string,
        public password: string,
        public confirm_passwrod: string,
        public firstname: string,
        public lastname: string,
        public email: string,
        public address: string,
    ) {}
}