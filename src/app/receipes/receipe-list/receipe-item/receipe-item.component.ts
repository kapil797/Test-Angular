import { Component, OnInit, Input } from '@angular/core';
import { Receipe } from '../../receipe.model';
import { ReceipeService } from '../../receipe.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {

  @Input() receipe: Receipe;
 
  ngOnInit(): void {
  }
}
