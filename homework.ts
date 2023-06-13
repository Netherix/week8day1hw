// // 1. For each of these values, what type will the TypeScript compiler infer?

let a = 118;
// // A: number

let b = 'Thieves';
// // A: string

let c = [true, false, false];
// // A: boolean[] (a list of booleans)
 
let d = {age: number};
// // A: object

let e = [3]
// // A: number[]

let f;
// // A: default "any" when no value is assigned

let g = []
// // A: any[]



// // 2. What are the compilation errors in each of the following code snippets?

let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// // A: There is a string type being assigned to title but there is no number type being assigned to releaseYear 

let prices = [100, 200, 300];
prices[0] = '$100';
// // A: $100 cannot be categorized as a number type because of the dollar sign

function myFunc(a: number, b: number): number {}
// // A: the function body is empty and thus no number types are being assigned to a & b