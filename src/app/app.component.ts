import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public searchForm: FormGroup;

  public locationData: any[] = [
    {
      id: 'MB01',
      activity: 's6d5f4sdf6545f',
      curCode: 'HKD',
      gamingDate: '19/08/2021',
      shiftCode: 'D'
    },
    {
      id: 'MB02',
      activity: 'df54gdfg4d5fg',
      curCode: 'HKD',
      gamingDate: '20/08/2021',
      shiftCode: 'B'
    },
    {
      id: 'MB03',
      activity: 'fd7df98g7',
      curCode: 'HKD',
      gamingDate: '21/08/2021',
      shiftCode: 'C'
    }
  ];

  shiftData: any[] = [{ id: 1, code: 'D' }, { id: 2, code: 'B' }];
  filteredLocation: any[];
  location: string;

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.searchForm = this.fb.group({
      location: ['', Validators.required],
      gamingDate: [new Date(), Validators.required],
      shiftType: ['', Validators.required]
    });
  }

  filterLocation(event) {
    this.filteredLocation = [];
    for (let i = 0; i < this.locationData.length; i++) {
      let location = this.locationData[i];
      if (location.id.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredLocation.push(location);
      }
    }
  }

  onSelectLocation(event) {
    console.log(event, 'on select location');

    let dateSplit = [];
    dateSplit = event.gamingDate.split('/');

    this.searchForm.controls.location.setValue(event.id);

    setTimeout(() => {
      this.searchForm.controls.gamingDate.setValue(new Date(`${dateSplit[1]}/${dateSplit[0]}/${dateSplit[2]}`));
      let index = this.shiftData.findIndex(shif => shif.code === event.shiftCode);
      index >= 0 ? this.searchForm.controls.shiftType.setValue(this.shiftData[index]) : this.searchForm.controls.shiftType.setValue(null);
    }, 100);
  }

  onRetrieve() {
    console.log(this.searchForm.value, 'on retrieve');

    const params = {
      location: this.searchForm.controls.location.value,
      gamingDate: this.searchForm.controls.gamingDate.value,
      shiftType: this.searchForm.controls.shiftType.value ? this.searchForm.controls.shiftType.value['code'] : null
    };

    console.log(params, 'on retrieve');
  }
}
