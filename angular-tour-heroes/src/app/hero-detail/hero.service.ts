mport { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class HeroService {


  constructor(private messageService: MessageService,private http: HttpClient, ) { }

  getHeroes(): Observable<Hero[]> {

    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('Heroes Cargados')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  getHero(id: number): Observable<Hero|undefined> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id ===id))
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`Heroe cargado con id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`Heroe actualizado con id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}