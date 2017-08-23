import { Injectable } from '@angular/core';

import { TopicAreaNavigationEntry } from '../models';
import * as navAreas from '../models/areas';

@Injectable()
export class TopicAreaNavigationFactoryService {

  constructor() { }

  public createAll(): TopicAreaNavigationEntry[] {
    const result = [
      this.createById(navAreas.DatabaseNavigationEntry.ID),
      this.createById(navAreas.DotNetNavigationEntry.ID),
      this.createById(navAreas.WebClientNavigationEntry.ID),
      this.createById(navAreas.DesignNavigationEntry.ID),
      this.createById(navAreas.NonTechnicalNavigationEntry.ID)
    ];

    return result;
  }

  public createById(id: number): TopicAreaNavigationEntry {
    if (id === navAreas.DatabaseNavigationEntry.ID) {
      return new navAreas.DatabaseNavigationEntry();
    }

    if (id === navAreas.DotNetNavigationEntry.ID) {
      return new navAreas.DotNetNavigationEntry();
    }

    if (id === navAreas.WebClientNavigationEntry.ID) {
      return new navAreas.WebClientNavigationEntry();
    }

    if (id === navAreas.DesignNavigationEntry.ID) {
      return new navAreas.DesignNavigationEntry();
    }

    if (id === navAreas.NonTechnicalNavigationEntry.ID) {
      return new navAreas.NonTechnicalNavigationEntry();
    }

    throw new Error(`Topic Area for ID ${id} not found.`);
  }
}
