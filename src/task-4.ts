function printUserInfo(
  name: string,
  age: number,
  email?: string,
): void {
  if (email) {
    console.log(`${name}, ${age} years old, email: ${email}`);
  } else {
    console.log(`${name}, ${age} years old`);
  }
}

printUserInfo("Alex", 25);
printUserInfo("Maria", 30, "maria@example.com");
