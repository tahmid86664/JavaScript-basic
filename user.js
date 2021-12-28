class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  getUser() {
    return {
      username: this.username,
      password: this.password,
      email: this.email
    } // JSON
  }

  setEmail(email) {
    this.email = email;
  }
}

module.exports = User;