import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';
import { ActivatedRoute,Router } from '@angular/router';
import { ProjetService } from '../service/projet.service';


@Component({
  selector: 'app-update-produit',
  templateUrl: './update-projet.component.html',
  styles: [
  ]
})

export class UpdateProjetComponent implements OnInit {
  currentProjet = new Projet();
  

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private projetService: ProjetService) { }


  ngOnInit(): void {
    this.projetService.consulterProjet(this.activatedRoute.snapshot.params.id).
    subscribe( proj =>{ this.currentProjet = proj; });
  }

 
  updateProjet() {
    this.projetService.updateProjet(this.currentProjet).subscribe(() => {
    this.router.navigate(['projets']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }

}