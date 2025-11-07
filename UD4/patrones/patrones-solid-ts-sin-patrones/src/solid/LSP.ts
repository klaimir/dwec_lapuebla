// ❌ Ejemplo sin aplicar LSP
class AveVoladora {
  volar() {
    console.log("🕊️ Volando...");
  }
}

class Flamenco extends AveVoladora {
  volar() {
    super.volar();
    console.log("Soy un flamenco");
  }
}

class Pinguino extends AveVoladora {
  volar() {
    throw new Error("🐧 Los pingüinos no vuelan");
  }
}

const ave = new AveVoladora();
const flamenco = new Flamenco();
const pinguino = new Pinguino();

ave.volar();
flamenco.volar();
try {
  pinguino.volar();
} catch (e) {
  console.error((e as Error).message);
}
