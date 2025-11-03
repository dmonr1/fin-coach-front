export interface Indicador {
    title: string;
    value: number;
    animated: number;
    prefix: string;
    badge: string;
    type: 'success' | 'danger' | '';
    icon: string;
}