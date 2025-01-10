import { ParentComponent } from './parent.component';

describe('ParentComponent', () => {
  let component: ParentComponent;

  beforeEach(() => {
    component = new ParentComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
