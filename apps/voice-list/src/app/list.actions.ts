import { createAction, props } from "@ngrx/store";

export const createList = createAction('[List Component] List Created', props<{listName: string}>());
export const deleteList = createAction('[List Component] List Deleted', props<{listName: string}>());

export const createItem = createAction('[Single List Component] Item Created', props<{itemName: string}>());
export const deleteItem = createAction('[Single List Component] Item Deleted', props<{itemName: string}>());
export const incompleteItem = createAction('[Single List Component] Item marked as Incomplete', props<{listName: string, itemName: string}>());
export const completeItem = createAction('[Single List Component] Item marked as Complete', props<{listName: string, itemName: string}>());
