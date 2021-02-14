import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
  // receieve from parent
  @Input() totalCount: number;
  @Input() pageSize: number;

  // send data to parent
  // 1 property
  @Output() pageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  // 2 method
  onPagerChange(event: any): void{
    // 3 emit
    this.pageChanged.emit(event.page);
  }
}
