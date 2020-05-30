declare type AppLink = {
    title: string;
    route: string;
    tooltip?: string;
    icon?: string;
}

declare type Order = {
    name: string;
    amount: number;
    cost: number;
    doubles: Doubles[]
}

declare type Doubles = {
    channa: boolean; // default to true
    triples: boolean;
    sweetSauce: boolean;
    coconut: boolean;
    pepper: 'none' | 'slight' | 'medium' | 'heavy';
    cucumber: boolean;
    kutchela: boolean;
    roastPepper: boolean;
}