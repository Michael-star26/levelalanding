import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiRoot} from '@taiga-ui/core';
import { EntryComponent } from './entry/entry.component';

@Component({
  selector: 'app-root',
  imports: [
    TuiRoot,
    EntryComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

}
