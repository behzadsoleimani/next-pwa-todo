export interface IListItem {
    id: number;
    value: string;
    status: "active" | "editing"
}

export interface IListItems extends Array<IListItem>{}
