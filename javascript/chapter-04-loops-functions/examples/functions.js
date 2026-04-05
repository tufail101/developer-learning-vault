function add(a, b) {
  return a + b;
}

for (let i = 1; i <= 3; i += 1) {
  console.log(`Round ${i}:`, add(i, i + 1));
}
