import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';
import { ProjetService } from '../service/projet.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html'})
export class AddProjetComponent implements OnInit {

  newProjet = new Projet();
  

  constructor(private projetService: ProjetService,
    private router :Router) { 
      }

  ngOnInit(): void {
  }
  addProjet(){
    //console.log(this.newProjet);
    this.projetService.ajouterProjet(this.newProjet)
    .subscribe(proj => { console.log(proj);  });
      this.router.navigate(['projets']);
  }
}
