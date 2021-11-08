export class Ciudad {
    cityId: number;
    departmentId: number;
    codigo: string;
    nombre: number;
    constructor(cityid: number, departmentId: number, codigo: string,
      nombre: number){
      this.cityId = cityid;
      this.departmentId = departmentId;
      this.codigo = codigo;
      this.nombre = nombre;
    }
}
