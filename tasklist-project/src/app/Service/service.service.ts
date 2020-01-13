import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../Modelo/Task';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  /*
  * A aplicação roda na Porta 8080 e acessa um banco chamado "tasklist_db" no MySQL usando um usuário "tasklist" com senha "123456"
  */
  Url = 'http://localhost:8080/v1/tasks';

  // Cria uma Task
  createTask(task: Task) {
    return this.http.post<Task>(this.Url, task);
  }

  // Obtém todas as Taks
  getTask() {
    return this.http.get<any>(this.Url);
  }

  // Obtém um Task pelo ID
  getTaskId(task: string) {
    return this.http.get<any>(this.Url + '/' + task);
  }

  // Atualiza uma Task pelo ID
  updateTask(task: Task) {
    return this.http.put<Task>(this.Url + '/' + task.id, task);
  }

  // Atualiza uma Task parcial pelo ID
  updateTaskPatch(task: Task) {
    return this.http.patch<Task>(this.Url + '/' + task.id, task);
  }

  // Deleta uma Task pelo ID
  deleteTask(task: Task ) {
    return this.http.delete<Task>(this.Url + '/' + task.id);
  }
}
