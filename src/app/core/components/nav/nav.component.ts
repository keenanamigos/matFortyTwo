import { Component, OnInit } from '@angular/core';
import {
    NavigationService,
    Page,
} from '../../services/navigation/navigation.service';
import { NavRoute } from '../../../nav-routing';
import { AuthService } from '../../../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
    isOpen = true;

    constructor(
        private navigationService: NavigationService,
        private authService: AuthService,
        private router: Router,
    ) {}

    ngOnInit() {}

    public toggleSideNav() {
        this.isOpen = !this.isOpen;
    }

    public getNavigationItems(): NavRoute[] {
        return this.navigationService.getNavigationItems();
    }

    public getActivePage(): Page {
        return this.navigationService.getActivePage();
    }

    public logout() {
        this.authService.logout();
        this.router.navigate(['login'], { replaceUrl: true });
    }

    public goBack() {
        const previousUrl = this.router.url
            .split('/')
            .slice(0, -1)
            .join('/');
        this.router.navigateByUrl(previousUrl);
    }

    public isChildPage(): boolean {
        const navUrl = this.router.url.split('nav').pop();
        return navUrl.split('/').length > 2;
    }
}
