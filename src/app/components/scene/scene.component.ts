import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStep } from '../../interface/i-step';

@Component({
  selector: 'app-scene',
  imports: [CommonModule],
  templateUrl: './scene.component.html',
  styleUrl: './scene.component.scss',
})
export class SceneComponent {
  @Input() steps: IStep[] = [];
  currentStep: number = 0;

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
}
