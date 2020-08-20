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
    cost: number;
    triples: boolean;
    pepper: 'none' | 'slight' | 'medium' | 'heavy';
    toppings: {
        channa: boolean; // default to true
        sweetSauce: boolean;
        coconut: boolean;
        cucumber: boolean;
        kutchela: boolean;
        roastPepper: boolean;
        bandania: boolean;
        
    }
}
