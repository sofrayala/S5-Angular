import { Component, OnInit } from '@angular/core';
import { StepsService } from '../services/steps.service';
import { IStep } from '../../interface/i-step';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scene',
  imports: [CommonModule],
  templateUrl: './scene.component.html',
  styleUrl: './scene.component.scss',
})
export class SceneComponent implements OnInit {
  steps: IStep[] = [];
  constructor(private service: StepsService) {}

  ngOnInit(): void {
    this.steps = this.service.getSteps();
  }
}
