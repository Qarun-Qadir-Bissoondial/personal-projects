import { createSelector } from '@ngrx/store';
import { ListsInStore, State } from './list.reducer';

export const getLists = (state: State) => state.lists;
export const getItems = (state: State) => state.items;

export const selectLists = createSelector(
    getLists,
    (state: ListsInStore) => state.allIds.map(id =>  { console.log(state.byId[id]); return state.byId[id]; })  
);
