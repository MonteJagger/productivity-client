import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from 'src/app/services/item/item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  item: any;
  imgUrl: String;
  editMode: boolean;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getItem();
  }

  // read item with service
  getItem() {
    this.itemService.getItem(this.id).subscribe(item => {
      this.item = item;
      if (this.item.displayUrl) {
        this.imgUrl = this.itemService.imgDisplayUrl + this.item.displayUrl;
      }
    });
  }

  // update item with service
  submitForm(data) {
    this.itemService.updateItem(this.id, data).subscribe(item => {
      this.item = Object.assign(this.item, data);
      this.setEditMode(false);
    });
  }

  // delete item with service
  deleteItem() {
    this.itemService.deleteItem(this.id).subscribe(item => {
      this.router.navigate(['/lists']);
    });
  }

  goBack() {
    this.router.navigate(['/lists']);
  }

  setEditMode(value: boolean) {
    this.editMode = value;
  }
}
