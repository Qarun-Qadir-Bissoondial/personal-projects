declare type Item = {
    name: string;
    completed: boolean;
}

declare type List = {
    name: string;
    itemsCompleted: Item[];
    itemsPending: Item[];
}

