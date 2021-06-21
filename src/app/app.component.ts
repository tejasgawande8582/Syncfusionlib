
import { Component } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent { 
    


    public items: ItemModel[] = [
        {
            text: 'Edit'
        },
        {
            text: 'Delete'
        },
        {
            text: 'Mark as Read'
        },
        {
            text: 'Like Message'
        }];
    

        public sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics'];
    
        public today: Date = new Date();
        public currentYear: number = this.today.getFullYear();
        public currentMonth: number = this.today.getMonth();
        public currentDay: number = this.today.getDate();
        public dateValue: Object = new Date(new Date().setDate(14));
        public minDate: Object = new Date(this.currentYear, this.currentMonth, 10);
        public maxDate: Object =  new Date(this.currentYear, this.currentMonth, 16);
    
}