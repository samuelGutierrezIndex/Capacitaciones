import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from 'rxjs';
// import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ApiClass {
    public uri = "http://localhost:3000";
    // public isProduction = environment.production;

    constructor(
        protected http: HttpClient
    ){}

    handleError(error: HttpErrorResponse){
        let errorMessage = 'Error desconocido.';

        if (error.error instanceof ErrorEvent) {
            // Error del lado del cliente
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Error del lado del servidor
            errorMessage = `Error código: ${error.status}\nMensaje: ${error.message}`;
        }

        console.error(errorMessage);
        return throwError(new Error(errorMessage));
            
    }
}