import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAsistencias } from '../interfaces/iasistencias'; 
import { environment } from 'src/environments/environment';
import { IAsistencia } from '../interfaces/iasistencia';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {

  constructor(private http: HttpClient) { }


  listarAsistencias():Observable<IAsistencias>{
    return this.http.get<IAsistencias>(`${environment.apiURL}/asistencias`)
  }


  crearAsistencia(newAsistencia: IAsistencia):Observable<IAsistencia>{
    return this.http.post<IAsistencia>(`${environment.apiURL}/asistencias`,newAsistencia)
  }

  getAsistenciaByID(id:Number):Observable<IAsistencias>{
    return this.http.get<IAsistencias>(`${environment.apiURL}/asistencias/?id=${id}`)
  }
}
