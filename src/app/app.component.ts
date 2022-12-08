import { Component } from '@angular/core';
import { ScriptService } from './services/script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quality-wax';

  constructor(private script: ScriptService) {

  }

  ngAfterViewInit(): void {
    this.script.load('slick-slides').then(data => {
      console.log('script loaded ', data);
    }).catch(error => console.log(error));
  }
}
