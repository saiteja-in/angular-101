import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";


@Injectable({
  providedIn:'root'
})
export class DataService{
  private apiUrl="https://api.example.com"
  data=signal<any[]>([]);
  constructor(private http:HttpClient){}
  fetchData(){
    this.http.get<any[]>(`${this.apiUrl}/items`).subscribe({
      next:(data)=>this.data.set(data),
      error:(error)=>console.error(error)
    })
  }
}
