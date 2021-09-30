export class Blogs {
  id_blog: number;
  titulo: string;
  descripcion: string;
  enlace: string;
  imagen: string;

  constructor(id_blog = 0, titulo = '',  descripcion = '', enlace = '', imagen=''){
    this.id_blog = id_blog
    this.titulo = titulo
    this.descripcion = descripcion
    this.enlace = enlace
    this.imagen = imagen
  }

}
