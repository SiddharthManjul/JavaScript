import * as dotenv from "dotenv";
dotenv.config()

export const PORT = 5555;

const password = process.env.PASSWORD;
export const mongoDBURL = `mongodb+srv://Siddharth:${password}@bookstore.ccmnfvk.mongodb.net/books-collection?retryWrites=true&w=majority&appName=BookStore`