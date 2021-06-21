
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';
import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';


enableRipple(true);

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        ButtonModule,
        DropDownButtonModule,
        FormsModule,
        ReactiveFormsModule,
        AutoCompleteModule,
        CheckBoxModule,
        CalendarModule,
        RadioButtonModule,
        SwitchModule
        
         
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
   
})
export class AppModule { }