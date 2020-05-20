import { Component, OnInit, Input, SimpleChanges, Output } from '@angular/core';
import { ItemService } from 'src/app/services/item/item.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers: [ItemService]
})
export class ItemComponent implements OnInit {
  @Input() item = null;
  @Input() baseUrl = null;
  @Input() isComplete: Boolean;
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.item.displayUrl = this.baseUrl + this.item.attachmentUrl;
    this.hideShowComplete();


  }

  deleteItem(id) {
    this.itemService.deleteItem(id).subscribe(item => {
      this.item = null;
    });
  }

  hideShowComplete() {
    if (this.isComplete && this.item.status !== 'complete') {
      this.item = null;
    }
    if (!this.isComplete && this.item.status === 'complete') {
      this.item = null;
    }
  }
}
