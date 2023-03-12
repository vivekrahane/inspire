import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthorDetails } from 'src/app/share/models/data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() author?: AuthorDetails;
  @Output() sortBook = new EventEmitter<string>();
}
