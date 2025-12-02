export class UserService {
  constructor(repository, formatter) {
    this.repository = repository;
    this.formatter = formatter;
  }

  registerUser(user) {
    const saved = this.repository.save(user);
    return this.formatter("User saved", saved);
  }
}
