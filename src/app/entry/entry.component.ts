import { Component } from '@angular/core';
import { CtaComponent } from '../cta/cta.component';
import { NavbarComponent } from '../navigation/navbar/navbar.component';
import { HeroSectionComponent, } from '../herosection/herosection.component';
import { ProblemsectionComponent } from '../problemsection/problemsection.component';
import { SolutionsectionComponent } from '../solutionsection/solutionsection.component';
import { MarketopportunityComponent } from '../marketopportunity/marketopportunity.component';
import { WhynowComponent } from '../whynow/whynow.component';
import { MoneytizationComponent } from '../moneytization/moneytization.component';
import { VisionComponent } from '../vision/vision.component';
import { FounderComponent } from '../founder/founder.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-entry',
  imports: [
    NavbarComponent,
    ProblemsectionComponent,
    SolutionsectionComponent,
    MarketopportunityComponent,
    WhynowComponent,
    MoneytizationComponent,
    VisionComponent,
    FounderComponent,
    CtaComponent,
    HeroSectionComponent,
    FooterComponent
  ],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.less'
})
export class EntryComponent {

}
