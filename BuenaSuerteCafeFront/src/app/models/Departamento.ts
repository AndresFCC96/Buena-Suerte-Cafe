export class Departamento {
    departmentid: number;
    departmentcode: string;
    description: string;
    state: string;
    createdby: string;
    creationdate: Date;
    modificatedby: string;
    modificationdate: Date;
    constructor(deparmtnetid: number, departmanetcode: string, description: string, state: string,
        createdby: string, creationdate: Date, modificatedby: string, modificationdate: Date){
        this.departmentid = deparmtnetid;
        this.departmentcode = departmanetcode;
        this.description = description;
        this.state = state;
        this.createdby = createdby;
        this.creationdate = creationdate;
        this.modificatedby = modificatedby;
        this.modificationdate = modificationdate;
    }
}