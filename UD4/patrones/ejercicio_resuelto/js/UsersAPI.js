export class UsersAPI {

  /**
   * Consulta con API
   */
  async consultar() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!respuesta.ok) throw new Error('Error en la red');
    return respuesta.json();
  }

}