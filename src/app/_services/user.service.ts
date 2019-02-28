import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

import { User } from '../_models';
const httpOptions = {
    headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization' : localStorage.getItem('token')
    })
  };
@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<User[]>(`http://localhost:3000/user/`,httpOptions);
  }

  getById(id: String) {
      return this.http.get(`/users/` + id);
  }

  register(user: User) {
      return this.http.post(`/users/register`, user);
  }

  update(user: User) {
      return this.http.put(`/users/` + user._id, user);
  }

  delete(useremail: String) {
    const httpOptions = {
        headers: new HttpHeaders({
           'Content-Type': 'application/json',
           'Authorization' : localStorage.getItem('token')
        }),
        param:{email:useremail}
      };
      return this.http.delete(`http://localhost:3000/user/`,httpOptions);
  }
}