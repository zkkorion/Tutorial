import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HttpClientService {

    constructor(
        private http: HttpClient,
    ) { }

    public getEntity(ref: string): Observable<any> {
        return this.http.get(`${environment.apiUrl}/api/${ref}`);
    }

    public postEntity(ref: string, body: string): Observable<any> {
        return this.http.post(`${environment.apiUrl}/api/${ref}`, body, { headers: { 'Content-Type': 'application/json' } });
    }
}
