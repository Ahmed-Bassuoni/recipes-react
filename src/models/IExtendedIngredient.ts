export interface IExtendedIngredient {
    aisle:        string;
    amount:       number;
    consitency:   Consitency;
    id:           number;
    image:        string;
    measures:     IMeasures;
    meta:         string[];
    name:         string;
    original:     string;
    originalName: string;
    unit:         string;
}

export enum Consitency {
    Liquid = "liquid",
    Solid = "solid",
}

export interface IMeasures {
    metric: IMeasure;
    us:     IMeasure;
}

export interface IMeasure {
    amount:    number;
    unitLong:  string;
    unitShort: string;
}
