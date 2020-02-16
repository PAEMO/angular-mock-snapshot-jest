import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChildComponent} from './child.component';
import {DependencyChildService} from '../dependency-child.service';

const dependencyChildServiceMock = {
  doSomething: jest.fn().mockReturnValue('Return from mock')
};

describe('ChildComponentComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChildComponent],
      providers: [{provide: DependencyChildService, useValue: dependencyChildServiceMock}]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(dependencyChildServiceMock.doSomething).toHaveBeenCalled();
  });

  it('should render without any input', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should render with inputs filled and specific mock', () => {
    dependencyChildServiceMock.doSomething.mockReturnValue('Another specific return');

    component.name = 'John';
    component.age = 42;
    fixture.detectChanges(); // detectChanges() is needed here because Inputs are added

    expect(fixture).toMatchSnapshot();
  });
});
