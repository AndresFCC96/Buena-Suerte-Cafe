export class Ciudad {
    cityid: number;
    citycode: string;
    description: string;
    departmentid: number;
    state: string;
    createdby: string;
    creationdate: Date;
    modificatedby: string;
    modificationdate: Date;
    constructor(cityid: number, citycode: string, description: string, 
        departmentid: number, state: string, createdby: string, creationdate: Date, 
        modifiedby: string, modificationdate: Date){
            this.cityid = cityid;
            this.citycode = citycode;
            this.description = description;
            this.departmentid = departmentid;
            this.state = state;
            this.createdby = createdby;
            this.creationdate = creationdate;
            this.modificatedby = modifiedby;
            this.modificationdate = modificationdate;
    }
}