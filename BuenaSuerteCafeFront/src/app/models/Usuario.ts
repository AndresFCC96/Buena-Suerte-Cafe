export class Usuario {
    userid:number;
    firstname: string;
    lastname: string;
    email: string;
    documenttype: string;
    documentnumber: string;
    phone: string;
    address: string;
    gender: string;
    password: string;
    role: string;
    cityid: number;
    state: string;
    createdby: string;
    creationdate: Date;
    modificatedby: string;
    modificationdate: Date;

    constructor(userid: number, firstname: string, lastname: string, email: string, 
        documenttype: string, documentnumber: string, phone:string, address: string,
        gender: string, password: string, role: string, cityid: number, state: string,
        createdby: string, creationdate: Date, modificatedby: string, modificationdate: Date){
        this.userid = userid;
        this.firstname = firstname;
        this.lastname = lastname;
        this.documenttype = documenttype;
        this.documentnumber = documentnumber;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.gender = gender;
        this.password = password;
        this.role = role;
        this.cityid = cityid;
        this.state = state;
        this.createdby = createdby;
        this.creationdate = creationdate;
        this.modificatedby = modificatedby;
        this.modificationdate = modificationdate;
    }
}