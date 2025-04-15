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
}
