function getMessage(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hi there");
    }, 1000);
  });
}

getMessage().then(
  (result: string) => {
    console.log(result.toUpperCase());
  },
);
