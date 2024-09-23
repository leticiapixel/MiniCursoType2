// Tipos Básicos
let age: number = 5;
const firstname: string = 'Felipe';
const isValid: boolean = true;
let idk: any = 5;

idk = '12';
idk = true;

const ids: number[] = [1, 2, 3, 4];
const booleans: boolean[] = [true, false, true, false];
const names: string[] = ['Felipe', 'Jane'];

// Tupla
const person: [number, string] = [1, 'Jane'];

// Lista de Tuplas
const people: [number, string][] = [
    [1, 'Jane'],
    [2, 'Doe'],
];    

// Intersections
const productId: string | number = 'teste';

// Enum
enum Direction{
    Up = 1,
    Down = 2
}

const direction = Direction.Up;

// Type Assertions
const productName: any = 'Boné';


// itemId = productName as string;
let itemId = <string>productName


console.log(direction)