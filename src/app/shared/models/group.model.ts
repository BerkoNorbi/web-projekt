export interface Group {
    id: string;
    active: boolean;
    type: string;
    name: string;
    quantity: number;
    managingEntity: string;
    managingEntityid: string;
    members: string[];
}
