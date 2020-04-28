declare type Item = { [key: string]: boolean };

declare type List = {
    name: string;
    items: Item;
    completed: number;
    pending: number;
}

