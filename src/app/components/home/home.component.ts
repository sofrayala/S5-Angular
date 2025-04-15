import { Component, OnInit } from '@angular/core';
import { SceneComponent } from '../scene/scene.component';
import { StepsService } from '../services/steps.service';
import { IStep } from '../../interface/i-step';

@Component({
  selector: 'app-home',
  imports: [SceneComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  steps: IStep[] = [];
  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
  }
}
