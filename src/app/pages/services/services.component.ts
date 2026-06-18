import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  services = [
    {
      title: 'Back Pain Treatment',
      image: 'assets/images/back-pain.jpg',
      description: 'Specialized treatment for chronic and acute back pain using advanced physiotherapy techniques.'
    },
    {
      title: 'Neck Pain Treatment',
      image: 'assets/images/neck-pain.jpg',
      description: 'Relieve neck stiffness, muscle tension, and posture-related discomfort.'
    },
    {
      title: 'Sports Injury Rehabilitation',
      image: 'assets/images/sports-rehab.jpg',
      description: 'Helping athletes recover safely and return to peak performance.'
    },
    {
      title: 'Post Surgery Rehabilitation',
      image: 'assets/images/post-surgery.jpg',
      description: 'Restore mobility, strength, and independence after surgery.'
    },
    {
      title: 'Home Visit Physiotherapy',
      image: 'assets/images/home-visit.jpg',
      description: 'Professional physiotherapy services delivered at your doorstep.'
    }
  ];
}