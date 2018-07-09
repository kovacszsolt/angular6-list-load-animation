import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-item-root',
    templateUrl: './app.item.component.html'
})
export class AppItemComponent {
    @Input() title = '';
}
