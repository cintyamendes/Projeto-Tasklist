import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Task } from 'src/app/Modelo/Task';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  task: Task = new Task();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
  }

  // Metódo responsável por salvar uma nova Task no BD
  Salvar() {
    if (this.task.titulo == null || this.task.status == null || this.task.descricao == null) {
      alert('Os campos são obrigatórios');
    } else {
      this.service.createTask(this.task)
      .subscribe(data => {
        alert('Task salva com sucesso.');
        this.router.navigate(['pesquisar']);
      });
   }
  }


}
