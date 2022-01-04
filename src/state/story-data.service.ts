import { Injectable } from '@angular/core';
import { EntityActionOptions, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { select } from '@ngrx/store';
import { map, Observable, OperatorFunction } from 'rxjs';
import { PeopleService } from 'src/serivce/people.service';
import { IPeopleApiModel } from 'src/state/api/people.api.model';
import { selectStories } from 'src/state/story.selectors';
import { Story } from './story';

@Injectable({
  providedIn: 'root',
})
export class StoryDataService extends EntityCollectionServiceBase<Story> {
  groupedStories$ = this.entities$.pipe(select(selectStories));

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private peopleService: PeopleService,
  ) {
    super('Story', serviceElementsFactory);
  }

  public override getAll(options?: EntityActionOptions): Observable<Story[]> {
    return this.peopleService.retrievePeople().pipe(
      map((value) => value.results),
      this.mapPeopleToStoryPipe(),
    );
  }

  private mapPeopleToStoryPipe = (): OperatorFunction<IPeopleApiModel[], Story[]> => map(
    (modelCollection: IPeopleApiModel[]) => modelCollection.map(
      (ppl, index) => ({
        storyId: ppl.height,
        title: ppl.name,
        description: ppl.gender,
        createdAt: new Date(ppl.created),
        updatedAt: new Date(ppl.edited),
        column: index % 4,
        order: index % (index % 4),
      }),
    )
  );
}
