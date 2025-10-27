// ❌ Ejemplo sin patrón Observer
class Usuario {
  constructor(public nombre: string) {}
  recibir(mensaje: string) {
    console.log(`📢 ${this.nombre} ha recibido: ${mensaje}`);
  }
}

class Canal {

  public usuarios: Usuario[] = [];

  constructor() {}

  suscribir(obs: Usuario) {
    this.usuarios.push(obs);
  }

  notificar(mensaje: string) {
    for (const usuario of this.usuarios) {
      usuario.recibir(mensaje);
    }
  }
}

// Aquí el problema es que trabajamos sobre implementaciones concretas
const ana = new Usuario("Ana");
const luis = new Usuario("Luis");

const canal = new Canal();

canal.suscribir(ana);
canal.suscribir(luis);
// La notificación sólo puede hacerse para Usuarios, no para cualquier
// tipo de objeto
canal.notificar("¡Nuevo vídeo disponible!");
