import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Task } from 'src/app/Modelo/Task';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  task: Task = new Task();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.Alterar();
  }

  // Metódo responsável por preencher as informações da Task para Atualizar
  Alterar() {
    const id = localStorage.getItem ('id');
    this.service.getTaskId(id)
    .subscribe( data => {
      this.task = data;
    });
  }

   // Metódo responsável por Atualizar uma nova Task no BD
  Atualizar(task: Task) {
    if (this.task.titulo == null || this.task.status == null || this.task.descricao == null) {
      alert('Os campos são obrigatórios');
    } else {
      this.service.updateTask(task)
      .subscribe( data => {
        this.task = data;
        alert('Task autualizada.');
        this.router.navigate(['pesquisar']);
      });
    }
  }
}



