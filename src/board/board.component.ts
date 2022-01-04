import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateStoryDto, DeleteStoryDto, Stories, UpdateStoryDto } from '../state/story';
import { StoryDataService } from '../state/story-data.service';

@Component({
  selector: 'ngrx-board-component',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  public stories$: Observable<Stories[]> = this.storyDataService.groupedStories$;
  public message: string = '';

  constructor(private storyDataService: StoryDataService) {
  }

  ngOnInit(): void {
    this.message = 'Loading...';
    this.storyDataService.getAll().subscribe({
      next: (value) => {
        this.storyDataService.addManyToCache(value);
        this.message = 'Done!';
      },
      error: (err) => {
        this.message = 'Something go wrong ¯\\_(ツ)_/¯. Check console.';
        console.error(err)
      },
    });
  }

  add(story: CreateStoryDto): void {
    this.storyDataService.add(story, { isOptimistic: false });
  }

  update(story: UpdateStoryDto): void {
    this.storyDataService.update(story, { isOptimistic: true });
  }

  loadAll(): void {
    this.storyDataService.getAll();
  }

  delete(id: DeleteStoryDto): void {
    this.storyDataService.delete(id);
  }
}
