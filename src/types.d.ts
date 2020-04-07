declare type Item = {
    name: string;
    completed: boolean;
}

declare type List = {
    name: string;
    items: Item[];
    completed: number;
    pending: number;
}

