import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Task } from 'src/app/Modelo/Task';

// @autor: Cintya Mendes
// @Layout baseado: Joel - SinFloo | fonte:
@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  listaTask: Task[];

  constructor(private service: ServiceService, private router: Router) { }

  // Iniciar com a lista das Task existentes
  ngOnInit() {
    this.service.getTask()
      .subscribe(data => {
        this.listaTask = data._embedded.tasks;
      });
  }

  // Método responsável pela rota da navegação do editar.component
  Editar(task: Task): void {
    localStorage.setItem('id', task.id.toString());
    this.router.navigate(['editar']);
  }

  // Método responsável pela deleção da Task selecionada
  Deletar(task: Task) {
    this.service.deleteTask(task)
    .subscribe(data => {
      this.listaTask = this.listaTask.filter(p => p !== task );
      alert('Task deletada');
    });
  }

}
