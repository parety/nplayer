import { Player } from '../../player';
import { Component } from '../../utils';
export declare class Loading extends Component {
    private player;
    private showTimer;
    private startWaitingTime;
    constructor(container: HTMLElement, player: Player);
    get showing(): boolean;
    private _checkCanplay;
    private checkCanplay;
    private tryShow;
    show: () => void;
    hide: () => void;
}
