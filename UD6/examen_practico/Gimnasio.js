class RegistroSocios {
  constructor() {
    this.socios = [];
    this.socios = [{ id: 1, dni: "aaaa", email: "bbbb", deporte: "Jiu Jitsu" }, { id: 2, dni: "aaa1", email: "bbb1", deporte: "Pesas" }]
  }

  insertarSocio(socio) {
    let socioEncontrado = this.socios.find((item) => item.dni === socio.dni);
    let correoEncontrado = this.socios.find(
      (item) => item.email === socio.email
    );
    if (socioEncontrado) {
      throw new Error("Existe un socio con el mismo DNI");
    } else if (correoEncontrado) {
      throw new Error("Existe un socio con ese correo");
    } else {
      let id = 0;
      if(this.socios.length !== 0) {
        id = this.socios[this.socios.length-1].id;
      }
      socio.id = ++id;
      this.socios.push(socio);
    }
  }

  sociosMatriculados() {
    const personasMap = this.socios.map(((item, index) => {
      return {
        nombreCompleto: item.nombre + " " + item.apellidos,
        edad: item.edad + " " + item.nacimiento,
        direccionCompleta: item.direccion + "(" + item.provincia + ")." + item.telefono + " " + item.email,
        sexo: item.sexo,
        fechaAlta: item.alta,
        deporteInscrito: item.deporte
      }
    }));
    return personasMap;
  }

  sociosByDeportes(deporte) {
    return this.socios.filter((socio) => {
      return socio.deporte === deporte;
    })
  }

  estadisticas() {
    // Sacar los deportes existentes
    const deportes = [];
    this.socios.forEach((socio) => {
      if(!deportes.includes(socio.deporte)) {
        deportes.push(socio.deporte);
      }
    });
    // Sacar estadísticas
    // Esto es pq se pierde contexto del this dentro del callback
    let that = this;
    const estadisticasMap = deportes.map(function (deporte) {
      return {
        deporte: deporte,
        total: that.sociosByDeportes(deporte).length
      }
    });
    return estadisticasMap;
  } 


}
