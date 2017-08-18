import { Injectable } from '@angular/core';

import { environment } from 'app/../environments/environment';

@Injectable()
export class EnvironmentService {

  public get isProduction(): boolean {
    return environment.production;
  }

  public get knowHowBaseServiceBaseUrl(): string {
    return environment.knowHowBaseServiceBaseUrl;
  }
}
