declare type AppLink = {
    title: string;
    route: string;
    tooltip?: string;
    icon?: string;
}

declare type Order = {
    name: string;
    totalCost: number;
    orders: DoublesConfig[]
}

declare type DoublesConfig = {
    amount: number;
    channa: boolean; // default to true
    triples: boolean;
    sweetSauce: boolean;
    coconut: boolean;
    pepper: 'none' | 'slight' | 'medium' | 'heavy';
    cucumber: boolean;
    kutchela: boolean;
    roastPepper: boolean;
    bandania: boolean;
    cost: number;
}
