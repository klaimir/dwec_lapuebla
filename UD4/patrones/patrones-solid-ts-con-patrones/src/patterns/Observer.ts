interface Observador {
  actualizar(mensaje: string): void;
}

class Canal {
  private observadores: Observador[] = [];

  suscribir(obs: Observador) {
    this.observadores.push(obs);
  }

  notificar(mensaje: string) {
    for (const obs of this.observadores) {
      obs.actualizar(mensaje);
    }
  }
}

class Usuario implements Observador {
  constructor(private nombre: string) {}
  actualizar(mensaje: string): void {
    console.log(`📢 ${this.nombre} ha recibido: ${mensaje}`);
  }
}

const canal = new Canal();
const ana = new Usuario("Ana");
const luis = new Usuario("Luis");

canal.suscribir(ana);
canal.suscribir(luis);

canal.notificar("¡Nuevo vídeo disponible!");
