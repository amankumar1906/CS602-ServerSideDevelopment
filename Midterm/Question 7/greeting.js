function sayHello(user = "Guest", callback) {
  const greeting = `Greetings and Salutations, ${user}`;
  callback(greeting);
}

export { sayHello };
