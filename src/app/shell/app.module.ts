// external-core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// areas
import { TopicAreasModule } from 'app/areas/topic-areas';

// third-parties
import { AgGridModule } from 'ag-grid-angular/main';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

// app-modules
import { AppNavigationModule } from './app-modules/app-navigation';
import { ErrorModule } from './app-modules/error';

// core-services
import { CoreServicesModule } from 'app/common/core-services';

// widgets
import { RxFormsModule } from 'app/common/widgets/rx-forms';

// app
import { AppComponent, AppRoutingModule } from '.';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    CoreServicesModule,
    RxFormsModule.forRoot(),
    AppNavigationModule,
    ErrorModule.forRoot(),
    MarkdownToHtmlModule.forRoot(),
    TopicAreasModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
