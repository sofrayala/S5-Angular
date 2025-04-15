import { Injectable } from '@angular/core';
import { IStep } from '../interface/i-step';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  constructor() {}

  getSteps(): IStep[] {
    return [
      {
        title: 'Dedicate many hours ',
        description:
          'A minimum of 30 hours a week. If you dont have enough, you will have to dedicate more hours to it. At first it seems impossible, but you will notice an improvement quickly.',
        image: '../assets/time_managment.svg',
        bgcolor: '',
      },
      {
        title: 'Program your own projects:',
        description:
          '10 hours working on your own projects is better than 10 hours watching tutorials. Motivation and involvement in the project will help accelerate your learning.',
        image: '../assets/programming.svg',
        bgcolor: '',
      },
      {
        title: 'Try to rest:',
        description:
          'Getting enough rest and disconnecting are vital. This way you will reduce stress and anxiety. You will improve your concentration and consolidate your learning.',
        image: '../assets/meditation.svg',
        bgcolor: '',
      },
    ];
  }
}
