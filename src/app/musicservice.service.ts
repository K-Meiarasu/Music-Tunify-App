import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicserviceService {

  private auth_key='Bearer BQDrPNH1n1Cqn2rz3_Q-eptDS85sQnAvH1GZfc0TQsP9XZbSUHYBHMVnGcDqDbudw3f_ExFMu-KHgcRGwcRc-E-WtoszIp7lztygW2qdpDWZOBmApb9vCi61FdfYfPREsy663DOWnaMn2X1vwf1Pr5-nWxmB1gU0Q7c'
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type':  'application/json',
      'Authorization': this.auth_key
    })
  };
  public value:any
  constructor(private http:HttpClient) { }
  getAllAlbum(searchalbum:any):Observable<any>{
    let appURL=`https://api.spotify.com/v1/search?q=${searchalbum}&type=track`;
    return this.http.get<any>(appURL,this.httpOptions)
  }
  // getAlbum(albumId:any):Observable<any>{
  //   let albumURL=`https://api.spotify.com/v1/albums/${albumId}`;
  //   return this.http.get<any>(albumURL,this.httpOptions)
  // }
  getTracks(albumId:any):Observable<any>{
    let trackURL=`https://api.spotify.com/v1/albums/${albumId}/tracks`;
    return this.http.get<any>(trackURL,this.httpOptions)
  }
  auth(value:any)
  {
    this.value=value;
  }
  
  getusers()
  {
    return this.http.get('http://localhost:3000/User');
  }

  login()
  {
    if(this.value)
    {
      return true;
    }
    return false;
  }
}
