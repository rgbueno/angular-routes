import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  constructor(
    private activeRoute: ActivatedRoute,
    private navegador: Router    
  ){
    //recupera parametro id
    this.activeRoute.params.subscribe(
      res => console.log(res)
    );

    //recupera parametro id da rota filha
    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    );

    //recupera valores passados após ? na url
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    );
  }
  ngOnInit(): void {
    /* faz redirecionamento
    setInterval(() => {
      this.navegador.navigate(['/'])
    }, 5000);*/
  }
}
