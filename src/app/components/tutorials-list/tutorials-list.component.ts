import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial';
import { TutorialService } from 'src/app/services/tutorial.service';
import { TutorialDetailsComponent } from '../tutorial-details/tutorial-details.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css'],
  standalone:true,
  imports:[TutorialDetailsComponent,NgIf,NgFor,FormsModule]
})
export class TutorialsListComponent implements OnInit {

  tutorials?: Tutorial[];
  title = '';
 currentTutorial: Tutorial = {};
 currentIndex = -1;

  constructor(private tutorialService: TutorialService){}

 ngOnInit(): void {
 this.retrieveTutorials();
 }
 
 retrieveTutorials(): void {
  this.tutorialService.getAll().subscribe({
    next: (data) => {
      this.tutorials = data;
      console.log(data);
    },
    error: (e) => console.error(e)
  });
}

refreshList(): void {
  this.retrieveTutorials();
  this.currentTutorial = {};
  this.currentIndex = -1;
}

setActiveTutorial(tutorial: Tutorial, index: number): void {
  this.currentTutorial = tutorial;
  this.currentIndex = index;
}

removeAllTutorials(): void {
  this.tutorialService.deleteAll().subscribe({
    next: (res) => {
      console.log(res);
      this.refreshList();
    },
    error: (e) => console.error(e)
  });
}

searchTitle(): void {
  this.currentTutorial = {};
  this.currentIndex = -1;

  this.tutorialService.findByTitle(this.title).subscribe({
    next: (data) => {
      this.tutorials = data;
      console.log(data);
    },
    error: (e) => console.error(e)
  });
}
}
