function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber: number = getFirstElement<number>([10, 20, 30]);
const firstString: string = getFirstElement<string>([
  "typescript",
  "generics",
  "arrays",
]);
const firstBoolean: boolean = getFirstElement<boolean>([false, true, false]);

console.log(firstNumber, firstString, firstBoolean);

// getFirstElement<number>([1, 2, "3"]);
