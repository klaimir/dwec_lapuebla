export function validateUser(user) {
  if (!user.name) {
    throw new Error("Name is required");
  }
  if (!user.email || !user.email.includes("@")) {
    throw new Error("Invalid email");
  }
}
