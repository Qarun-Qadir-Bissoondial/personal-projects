import { Action, createReducer, on } from '@ngrx/store';
import { generateFakeList } from '../testing/fake-gen';
import * as ListActions from './list.actions';

export interface List {
    listName: string;
    total: number;
    completed: number;
    pending: number;
}

export interface Item {
    name: string;
    listName: string;
    completed: boolean;
}

export interface ListsInStore {
    byId: { [listName: string]: List },
    allIds: string[];
}

export interface ItemsInStore {
    byId: { [itemName: string]: Item };
    allIds: string[]
}

export interface State {
    lists: ListsInStore;
    items: ItemsInStore
}

export const initialState: State = {
    lists: {
        byId: {
            l1: generateFakeList('l1')
        },
        allIds: ['l1']
    },
    items: {
        byId: {},
        allIds: []
    }
};

const createDefaultList = (listName: string): List => ({ listName, total: 0, pending: 0, completed: 0 });

const storeReducer = createReducer(
    initialState,
    on(ListActions.createList, (state, meta) => {
        const { listName } = meta;

        state.lists.allIds = state.lists.allIds.concat(listName);
        state.lists.byId[listName] = createDefaultList(listName);

        return state;

    }),

    on(ListActions.deleteList, (state, meta) => {
        
        // delete all items associated with the list
        const itemsOfList = state.items.allIds.filter(id => { state.items.byId[id].listName === meta.listName });

        const newState = Object.assign({}, state);

        for (const item of itemsOfList) {
            newState.items.allIds.splice(newState.items.allIds.indexOf(item), 1);
            delete newState.items.byId[item];
        }
        
        // delete the list

        newState.lists.allIds.splice(newState.lists.allIds.indexOf(meta.listName));
        delete newState.lists.byId[meta.listName]

        return newState;
    }),

    on(ListActions.createItem, (state, meta) => {

        const { itemName } = meta;
        state.items.allIds =  state.items.allIds.concat(itemName);
        state.items.byId = Object.assign(state.items.byId, { [itemName]: createDefaultList(itemName) });
        return state;

    }),

    on(ListActions.deleteItem, (state, meta) => {
        
        const { itemName } = meta;
        const newState = Object.assign({}, state);
        newState.items.allIds.splice(newState.items.allIds.indexOf(itemName));
        delete newState.items.byId[itemName];
        
        return newState;
    }),

    on(ListActions.incompleteItem, (state, meta) => {

        const { listName, itemName } = meta;
        state.lists.byId[listName].completed--;
        state.lists.byId[listName].pending++;
        state.items.byId[itemName].completed = false;
        return state;
    }),

    on(ListActions.completeItem, (state, meta) => {

        const { listName, itemName } = meta;
        state.lists.byId[listName].completed++;
        state.lists.byId[listName].pending--;
        state.items.byId[itemName].completed = true;
        return state;
    })

);

export function reducer(state: State | undefined, action: Action) {
    return storeReducer(state, action)
}

// const x = {
//     lists: {
//         byId: {
//             'list1': {
//                 name: 'list1',
//                 completed: 0,
//                 pending: 2,
//                 total: 2
//             }
//         },
//         allIds: ['list1']
//     },
//     items: {
//         byId: {
//             'item1': {
//                 name: 'item1',
//                 listName: 'list1',
//                 completed: false
//             },
//             'item2': {
//                 name: 'item2',
//                 listName: 'list1',
//                 completed: false
//             }
//         },
//         allIds: ['item1', 'item2']
//     }
// }

