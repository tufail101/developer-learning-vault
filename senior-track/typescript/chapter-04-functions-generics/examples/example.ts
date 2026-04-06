function identity<T>(value: T): T {
  return value;
}

function getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}

console.log(identity("hello"));
console.log(getFirstItem([1, 2, 3]));
