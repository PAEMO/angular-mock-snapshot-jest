import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChildComponent} from './child.component';
import {DependencyChildService} from '../dependency-child.service';

const DependencyChildServiceMock = {
  doSomething: () => 'Return from mock'
};

describe('ChildComponentComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async(() => {
    component = null;
    fixture = null;
    TestBed.configureTestingModule({
      declarations: [ChildComponent],
      providers: [{provide: DependencyChildService, useValue: DependencyChildServiceMock}]
    });
    // .compileComponents();
    // For this case, we do not compile components here because we want to override provider in a specific case
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render without any input', () => {
    fixture = TestBed.createComponent(ChildComponent);
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should render with inputs filled and specific mock', () => {
    TestBed
      .overrideProvider(
        DependencyChildService,
        {useValue: {doSomething: () => 'Another specific return'}})
      .compileComponents();
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    component.name = 'John';
    component.age = 42;
    fixture.detectChanges(); // detectChanges() is needed here because Inputs are added
    expect(fixture).toMatchSnapshot();
  });
});
