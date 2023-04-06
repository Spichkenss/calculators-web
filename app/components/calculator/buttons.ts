export enum ButtonType {
    action,
    number,
}

export interface IButton {
    symbol: string
    type: ButtonType
}

export const buttons: IButton[] = [
    {symbol: '+', type: ButtonType.action},
    {symbol: '-', type: ButtonType.action},
    {symbol: '%', type: ButtonType.action},
    {symbol: 'C', type: ButtonType.action},
    {symbol: '*', type: ButtonType.action},
    {symbol: '7', type: ButtonType.number},
    {symbol: '8', type: ButtonType.number},
    {symbol: '9', type: ButtonType.number},
    {symbol: '/', type: ButtonType.action},
    {symbol: '4', type: ButtonType.number},
    {symbol: '5', type: ButtonType.number},
    {symbol: '6', type: ButtonType.number},
    {symbol: '0', type: ButtonType.number},
    {symbol: '1', type: ButtonType.number},
    {symbol: '2', type: ButtonType.number},
    {symbol: '3', type: ButtonType.number},
    {symbol: ',', type: ButtonType.number},

]
