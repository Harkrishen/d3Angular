import { Component } from '@angular/core';
import APP_CONFIG from './app.config';
import { Node, Link } from './d3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {
    const N = APP_CONFIG.N,
          getIndex = number => number - 1;

    /** constructing the nodes array */
   /* for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i));
    }*/

    this.nodes.push(new Node(1, "Cobra","Cobra - EU"));
    this.nodes.push(new Node(2, "FX Viper", "FX Viper - AS"));
    this.nodes.push(new Node(7, "FX Viper", "FX Viper - EU"));
    this.nodes.push(new Node(3,"FX Venom", "FX Venom - AS"));
    this.nodes.push(new Node(8,"FX Venom", "FX Venom - EU"));
    this.nodes.push(new Node(5, "MOR Reporting", "Mor Reporting - EU"));
    this.nodes.push(new Node(9, "MOR Reporting", "Mor Reporting - AS"));
    this.nodes.push(new Node(6,"Axial", "Axial - EU"));


    this.links.push(new Link(1,2));
    this.links.push(new Link(1,7));
    this.links.push(new Link(1,3));
    this.links.push(new Link(1,8));
    this.links.push(new Link(1,5));
    this.links.push(new Link(1,9));
    this.links.push(new Link(9,6));
    this.links.push(new Link(2,6));




    /*
        for (let i = 1; i <= N; i++) {
          for (let m = 2; i * m <= N; m++) {
            /!** increasing connections toll on connecting nodes *!/
            this.nodes[getIndex(i)].linkCount++;
            this.nodes[getIndex(i * m)].linkCount++;

            /!** connecting the nodes before starting the simulation *!/
            this.links.push(new Link(i, i * m));
          }
        }*/
  }
}
