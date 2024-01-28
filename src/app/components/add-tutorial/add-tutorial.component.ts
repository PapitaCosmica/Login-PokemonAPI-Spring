import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial';
import { TutorialService } from 'src/app/services/tutorial.service';
import { NgIf,NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
  standalone:true,
  imports:[NgIf,NgFor,FormsModule]
})
export class AddTutorialComponent {
  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) {}

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    this.tutorialService.create(data).subscribe({
      next: (res:any) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e:any) => console.error(e)
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }
}
