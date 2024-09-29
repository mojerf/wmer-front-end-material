import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        MatSidenavModule,
        NoopAnimationsModule,
        MatDividerModule,
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('toggleTheme SHOULD change theme and themeIcon WHEN called', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Set initial theme to 'light'
    document.body.dataset['theme'] = 'light';

    app.toggleTheme();

    expect(document.body.dataset['theme']).toBe('dark');
    expect(app.themeIcon).toBe('light_mode');

    // Toggle theme again
    app.toggleTheme();

    expect(document.body.dataset['theme']).toBe('light');
    expect(app.themeIcon).toBe('dark_mode');
  });
});
