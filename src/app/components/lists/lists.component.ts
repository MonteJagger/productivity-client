import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item/item.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
  providers: [ItemService]
})
export class ListsComponent implements OnInit {
  title = 'productivity-client';
  itemList = null;
  baseUrl = null;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.updateList();
    this.baseUrl = this.itemService.imgDisplayUrl;
  }

  updateList() {
    this.itemService.getItemList()
      .subscribe(items => this.itemList = items);
  }
}
