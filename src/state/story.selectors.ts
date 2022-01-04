import { createSelector } from '@ngrx/store';
import { Stories, Story } from './story';

export const selectStories = createSelector<Story[], [Story[]], Story[][]>(
  (stories) => stories,
  (stories: Stories) =>
    stories.reduce<Stories[]>(
      (prev, cur) => {
        const cloneObj = {...cur, order: prev[cur.column].length};

        prev[cur.column].push(cloneObj);

        prev[cur.column].sort((a, b) => a.order - b.order);
        return prev;
      },
      [[], [], [], []]
    )
);
