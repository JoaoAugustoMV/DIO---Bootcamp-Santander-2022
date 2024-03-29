import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/book";

@Injectable({
    providedIn: 'root'
})

export class BookService{
    private url = 'http://localhost:3200/api/books'
    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }
    constructor(private httpClient: HttpClient){

    }

    getBook(){
        return this.httpClient.get<Book[]>(this.url)
    }
}

