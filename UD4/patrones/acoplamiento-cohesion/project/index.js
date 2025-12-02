import { UserRepository } from "./repositories/userRepository.js";
import { UserService } from "./services/userService.js";
import { messageFormatter } from "./utils/messageFormatter.js";
import { validateUser } from "./validators/userValidator.js";

const repository = new UserRepository();
const userService = new UserService(repository, messageFormatter);

try {
  const user = { name: "Juan", email: "juan@example.com" };
  validateUser(user);
  const result = userService.registerUser(user);
  console.log(result);
} catch (err) {
  console.error("Error:", err.message);
}
