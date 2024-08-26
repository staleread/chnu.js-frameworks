let str: string;
let int: number;
let bool: boolean;

str = 'Some string';
int = 1234;
bool = int > 1000;

const arr1: number[] = [1, 23.3, -12];
const arr2: Array<string> = ['hi', ', ', 'world!'];
const arr3: Array<number | string> = [...arr1, ...arr2];
