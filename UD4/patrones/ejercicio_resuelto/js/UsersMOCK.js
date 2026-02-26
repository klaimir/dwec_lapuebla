export class UsersMOCK {

  /**
   * Consulta con MOCK
   */
  async consultar() {
    return [
      { id: 1, name: "Ana García (Mock)", email: "ana@mock.com" },
      { id: 2, name: "Luis Pérez (Mock)", email: "luis@mock.com" }
    ];
  }

}