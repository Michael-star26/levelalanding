import { Component } from '@angular/core';
import { NavbarComponent } from '../navigation/navbar/navbar.component';
import { TuiCardLarge } from '@taiga-ui/layout';
import { TuiAppearance } from '@taiga-ui/core';

@Component({
  selector: 'app-cta',
  imports: [
    NavbarComponent,
    TuiCardLarge,
    TuiAppearance
  ],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.less'
})
export class CtaComponent {

}
