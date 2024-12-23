import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { output } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-star-rating',
  standalone: true, // Standalone component
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss',
  imports: [CommonModule,NgbRatingModule],
})
export class StarRatingComponent implements OnInit {
  @Input() rating!: number;
  @Input() isreadonly! : any;

ngOnInit(): void {
    
}


}
