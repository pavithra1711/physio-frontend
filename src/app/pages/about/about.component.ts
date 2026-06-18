import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  clinicInfo = {
    name: 'PhysioCare Clinic',
    experience: '10+ Years',
    patients: '5000+',
    treatments: '10000+'
  };

}