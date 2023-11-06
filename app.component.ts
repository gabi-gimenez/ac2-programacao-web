import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [
    { description: 'Academia', concluida: true },
    { description: 'Estudar Airflow', concluida: true},
    { description: 'Médico', concluída: false },
    { description: 'Prova', concluída: false },
    { description: 'Ir ao Banco', concluída: false },
  ];

  feedback = ''; // Variável para armazenar o feedback

  toggleConcluir(task: any) {
    // Marcar a tarefa como concluída
    task.concluída = true;
  }
}
