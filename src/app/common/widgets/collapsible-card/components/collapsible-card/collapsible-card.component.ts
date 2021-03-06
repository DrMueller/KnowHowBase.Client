import { Component, Input, EventEmitter, Output } from '@angular/core';

import { trigger, style, transition, state, animate, keyframes } from '@angular/animations';

// import { animations } from './animations';

@Component({
  selector: 'app-collapsible-card',
  templateUrl: './collapsible-card.component.html',
  styleUrls: ['./collapsible-card.component.scss'],
  animations: [
    trigger('detailsArrowAnimation',
      [
        state('1', style(
          {
            transform: 'rotate(0deg)'
          })),
        state('0', style(
          {
            transform: 'rotate(180deg)'
          })),
        transition('* => *', animate('400ms ease-out'))
      ]),
    trigger('detailsContentAnimation',
      [
        state('1', style(
          {
            'height': '*',
            'padding-top': '*',
            'padding-bottom': '*'
          })),
        state('0', style(
          {
            'height': 0,
            'padding-top': 0,
            'padding-bottom': 0
          })),
        transition('* => *', animate('400ms ease-out'))
      ])
  ]
})
export class CollapsibleCardComponent {
  private _areDetailsVisible = true;

  @Output() public visibilityChanged = new EventEmitter<boolean>();

  @Input() public set areDetailsVisible(data: boolean) {
    this._areDetailsVisible = data;
  }

  public get areDetailsVisible(): boolean {
    return this._areDetailsVisible;
  }

  public toggleVisibility(): void {
    this.areDetailsVisible = !this.areDetailsVisible;
    this.visibilityChanged.emit(this.areDetailsVisible);
  }
}
