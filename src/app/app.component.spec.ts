import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {TestBed} from '@angular/core/testing';


beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [ AppComponent ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  })
    .compileComponents();
});

describe('AppComponent', () => {
  it('should render the component', async () => {
    const { getByText } = await render(AppComponent);
    expect(getByText('Tour of Heroes'));
  });
});
