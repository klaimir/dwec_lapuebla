import { UsersAPI } from "./UsersAPI.js";
import { UsersMOCK } from "./UsersMOCK.js";

export class UsersFactory {
  static crear(tipo) {
    switch (tipo) {
      case "API":
        return new UsersAPI();
      case "MOCK":
        return new UsersMOCK();
      default:
        throw new Error("Tipo de notificación no soportado");
    }
  }
}