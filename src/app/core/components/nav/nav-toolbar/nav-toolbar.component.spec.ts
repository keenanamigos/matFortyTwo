import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavToolbarComponent } from './nav-toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('NavToolbarComponent', () => {
    let component: NavToolbarComponent;
    let fixture: ComponentFixture<NavToolbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavToolbarComponent],
            imports: [MatIconModule, MatToolbarModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
