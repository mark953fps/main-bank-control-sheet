import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataCheckBox: any = [
    { id: 1, name: 'checkbox1' },
    { id: 2, name: 'checkbox2' },
    { id: 3, name: 'checkbox3' },
    { id: 4, name: 'checkbox4' },
    { id: 5, name: 'checkbox5' },
    { id: 6, name: 'checkbox6' },
    { id: 7, name: 'checkbox7' }
  ];

  public ngOnInit() {}
}
