// Type

type Order = {
    productId: string;
    price: number
}

type User = {
    firstName: string;
    age: number;
    email: string;
    password?: string;
    orders: Order[];
    register(): string;
};

const user: User = {
    firstName: 'Jane',
    age: 20,
    email: 'teste',
    password: '1234',
    orders: [{productId: '1', price: 200}],
    register() {
        return 'a';
    },
};

const printlog = (message: string) => {

}

printlog(user.password!)

// Unions
type Author = {
    books: string[]
}

const author: Author & User = {
    age: 2,
    books: ['1'],
    email: 'teste',
    firstName: 'felipe',
    orders: [],
    register() {
        return 'a';
    },
};

// Interfaces
interface UserInterface {
    readonly firstName: string,
    email: string
    login(): string
}

const emailUser: UserInterface = {
    email: 'teste',
    firstName: 'nome',
    login() {
       return  'a'; 
    },
};

interface AuthorInterface {
    books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
    email: 'teste',
    firstName: 'teste',
    books:[],
    login() {
        return  'a'; 
     },
};

type Grade = number | string;
const grade: Grade = 1;
 
