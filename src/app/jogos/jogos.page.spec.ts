import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JogosPage } from './jogos.page';

import { Component } from '@angular/core';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.page.html',
  styleUrls: ['./jogos.page.scss']
})
export class HomePage {
  public form = [
      { val: 'Pepperoni', isChecked: true },
      { val: 'Sausage', isChecked: false },
      { val: 'Mushroom', isChecked: false }
    ];
}
describe('JogosPage', () => {
  let component: JogosPage;
  let fixture: ComponentFixture<JogosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JogosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
