import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams, RowNode } from 'ag-grid/main';

import { CellMediatorService } from '../../services';

@Component({
  selector: 'app-add-button-cell-renderer',
  templateUrl: './add-button-cell-renderer.component.html',
  styleUrls: ['./add-button-cell-renderer.component.scss']
})
export class AddButtonCellRendererComponent implements AgRendererComponent {
  private _params: ICellRendererParams;

  refresh(params: any): void {
  }

  agInit(params: ICellRendererParams): void {
    this._params = params;
  }

  afterGuiAttached(params?: IAfterGuiAttachedParams): void {
  }

  public cellClicked($event): void {
    const cellMediatorService = <CellMediatorService>this._params.context;
    cellMediatorService.executeCallback(this._params.node);
  }

  constructor() { }
}
