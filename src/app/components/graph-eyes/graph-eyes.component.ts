import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-eyes',
  templateUrl: './graph-eyes.component.html',
  styleUrls: ['./graph-eyes.component.css']
})
export class GraphEyesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const reds: any = document.getElementsByClassName('red');
    const whites: any = document.getElementsByClassName('white');
    const blacks: any = document.getElementsByClassName('black');
    document.body.onmousemove = (e) => {
	  const x = e.clientX - (document.body.clientWidth / 2);
	  const y = e.clientY - (document.body.clientHeight / 2);

	  for (let i = 0; i < reds.length; i++ ) {
		reds[i].style.transform = 'translate(' + (x * 0.005) + 'px, ' + (y * 0.00625) + 'px)';
	  }
	  for (let i = 0; i < whites.length; i++) {
		whites[i].style.transform = 'translate(' + (x * 0.0025) + 'px, ' + (y * 0.0125) + 'px) rotate(45deg)';
    }
    for (let i = 0; i < blacks.length; i++) {
    blacks[i].style.transform = 'translate(' + (x * 0.015) + 'px, ' + (y * 0.028125) + 'px)';
    }
};
  }

}
