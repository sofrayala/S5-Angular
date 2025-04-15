import { Injectable } from '@angular/core';
import { IStep } from '../../interface/i-step';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  constructor() {}

  getSteps(): IStep[] {
    return [
      {
        title: 'Step1',
        description: 'Step 1 description',
        image: '',
        bgcolor: '',
      },
      {
        title: 'Step2',
        description: 'Step2  description',
        image: '',
        bgcolor: '',
      },
      {
        title: 'Step3',
        description: 'Step3  description',
        image: '',
        bgcolor: '',
      },
    ];
  }
}
