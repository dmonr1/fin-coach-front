import { Feature } from "./features";

export interface Plan {
    title: string;
    badge: string;
    icon: string;      
    price: string;
    description: string;
    features: Feature[];
}