import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStep } from '../../interface/i-step';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-scene',
  imports: [CommonModule],
  templateUrl: './scene.component.html',
  styleUrl: './scene.component.scss',
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100),
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class SceneComponent {
  @Input() steps: IStep[] = [];
  currentStep: number = 0;
  i: any;

  nextStep(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  goToStep(index: number): void {
    this.currentStep = index;
  }
}
