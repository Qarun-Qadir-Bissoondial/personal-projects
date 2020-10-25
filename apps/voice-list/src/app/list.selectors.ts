import { createSelector } from '@ngrx/store';
import { ItemsInStore, List, ListsInStore, State } from './list.reducer';

export const getLists = (state: {appState: State}): ListsInStore => { return state.appState.lists }
export const selectItems = (state: State): ItemsInStore => state.items;

export const selectLists = createSelector(
    getLists,
    (state: ListsInStore) => state.allIds.map(id => state.byId[id])
);

// export const selectLists = createSelector(
//     getLists,
//     (state: ListsInStore) =>  {
//         console.log(state);
//         return state.allIds.map(id =>  { console.log(state.byId[id]); return state.byId[id]; })
//     }
// ); 

// export const selectLists = createSelector(
//     getLists,
//     (state: ListsInStore) => state.allIds.map(id =>  { console.log(state.byId[id]); return state.byId[id]; })  
// );
