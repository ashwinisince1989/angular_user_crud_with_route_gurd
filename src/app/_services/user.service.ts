import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<User[]>(`/users`);
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

  delete(id: String) {
      return this.http.delete(`/users/` + id);
  }
}