import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
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
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.item.displayUrl = this.baseUrl + this.item.attachmentUrl;
  }

  deleteItem(id) {
    this.itemService.deleteItem(id).subscribe(item => {
      this.item = null;
    });
  }
}
