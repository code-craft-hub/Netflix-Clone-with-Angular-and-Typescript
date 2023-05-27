import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) {  }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "3acfa464d391dbff9aecc1d5d45aba60"
// bannerapidata

bannerApiData():Observable<any>{
  return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
}

// trendingmovieapidata

trendingMovieApiData():Observable<any>{
 return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`)
}

getsearchMovie(data:any):Observable<any>{
  console.log(data,'movie#')
  return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`)
}

getMovieDetails(data:any):Observable<any>{
  return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
}

getMovieVideo(data:any):Observable<any>{
  return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
}

getMovieCast(data:any):Observable<any>{
  return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
}












}
