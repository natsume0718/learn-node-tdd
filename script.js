import { add, multiply, subtract, divide } from './src/index.js';

function main() {
  if (process.argv.length < 3) {
    return;
  }
  const methodArgs = process.argv.slice(3).map((v) => {
    const number = Number(v);
    return !isNaN(number) ? number : v;
  });

  switch (process.argv[2]) {
    case 'add':
      console.log(add(...methodArgs));
      break;
    case 'multiply':
      console.log(multiply(...methodArgs));
      break;
    case 'subtract':
      console.log(subtract(...methodArgs));
      break;
    case 'divide':
      console.log(divide(...methodArgs));
      break;
    default:
      break;
  }
}

main();
