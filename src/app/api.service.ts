import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataTable } from './table/table.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(): Observable<DataTable[]> {
    return this.http.get<DataTable[]>("./assets/dataMoka.json");
  }
}
