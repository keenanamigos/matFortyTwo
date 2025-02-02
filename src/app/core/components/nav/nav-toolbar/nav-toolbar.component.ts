import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from '../../../services/navigation/navigation.service';

@Component({
    selector: 'app-nav-toolbar',
    templateUrl: './nav-toolbar.component.html',
    styleUrls: ['./nav-toolbar.component.scss'],
})
export class NavToolbarComponent implements OnInit {
    @Input() activePage: Page;
    @Output() toggleSideNav = new EventEmitter();
    @Output() logout = new EventEmitter();
    @Output() goBack = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    public onToggleSideNav() {
        this.toggleSideNav.emit();
    }

    public onLogout() {
        this.logout.emit();
    }

    public onGoBack() {
        this.goBack.emit();
    }
}
