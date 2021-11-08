export class Departamento {
    departmentId: number;
    codigo: string;
    nombre: string;
    constructor(departmentId: number, codigo: string, nombre: string){
        this.departmentId = departmentId;
        this.codigo = codigo;
        this.nombre = nombre;
    }
}
