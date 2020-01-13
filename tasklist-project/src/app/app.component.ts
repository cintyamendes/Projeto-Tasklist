import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gerenciar Tasklist';

  constructor(private router: Router ) { }

  // Rota de Pesquisar
  pesquisarTask() {
    this.router.navigate(['pesquisar']) ;
  }

  // Rota de Adicionar
  inserirTask() {
    this.router.navigate(['adicionar']);
  }

}

