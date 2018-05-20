import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class ServicesUserService {
  
  url = 'http://206.189.238.190:5002/users/'
  constructor(public _http: HttpClient) { }


  getUsers(){
    return this._http.get<any>(this.url); 
  }
  getUserById(id){
    return this._http.get(this.url+id); 
  }

  updateUser(user : any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = JSON.stringify(user);
    return this._http.put('http://206.189.238.190:5002/users/' + user._id, body, httpOptions);
  }

  addUser(user){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = JSON.stringify(user);
    return this._http.post('http://206.189.238.190:5002/users/', body, httpOptions );

  }

  deleteUser(idUser){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.delete('http://206.189.238.190:5002/users/'+idUser, httpOptions );
  }
}
