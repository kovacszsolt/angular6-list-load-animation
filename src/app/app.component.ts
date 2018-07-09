import {Component, OnInit} from '@angular/core';
import {AppAnimationItem, AppAnimationList} from './app.animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [AppAnimationList, AppAnimationItem]
})

export class AppComponent implements OnInit {
    title = 'app';

    public records = [];

    private readonly RECORD_INIT_COUNT = 5;

    private readonly RECORD_PLUS_COUNT = 3;

    public constructor() {

    }


    private addItems(count) {
        for (let i = 0; i < count; i++) {
            this.records.push({title: 'alma-' + ((this.records.length)).toString()});
        }
    }

    public plus() {
        this.addItems(this.RECORD_PLUS_COUNT);
    }

    ngOnInit(): void {
        this.addItems(this.RECORD_INIT_COUNT);
    }

}
