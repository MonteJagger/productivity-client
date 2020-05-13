import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = environment.apiUrl;
  imgDisplayUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  createItem(formData: FormData) {
    console.log(formData);
    return this.http.post(this.apiUrl + 'api/items', formData);
  }

  getItemList() {
    return this.http.get(this.apiUrl + 'api/items');
  }

  getItem(id) {
    return this.http.get(this.apiUrl + 'api/items/' + id);
  }

  updateItem(id, data) {
    return this.http.put(this.apiUrl + 'api/items/' + id, data);
  }

  deleteItem(id) {
    return this.http.delete(this.apiUrl + 'api/items/' + id);
  }
}
