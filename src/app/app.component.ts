import { Component } from '@angular/core';

@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bbt';

  data: any = {
  };

  message: string = '';

  meetings: any = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
  ];

  days: any = [
    { id: 1, name: "Monday" },
    { id: 2, name: "Tuesday" },
    { id: 3, name: "Wednesday" },
    { id: 4, name: "Thursday" },
    { id: 5, name: "Friday" },
    { id: 6, name: "Saturday" },
    { id: 7, name: "Sunday" },
  ]

  onSubmit() {
    alert(JSON.stringify(this.data));
  }
}
