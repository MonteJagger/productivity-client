import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item/item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  item: any;
  imgUrl: String;
  id = this.route.snapshot.paramMap.get('id');

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem() {
    this.itemService.getItem(this.id).subscribe(item => {
      this.item = item;
      if (this.item.displayUrl) {
        this.imgUrl = this.itemService.imgDisplayUrl + this.item.displayUrl;
      }
    });
  }

  deleteItem() {
    this.itemService.deleteItem(this.id).subscribe(item => {
      this.router.navigate(['/lists']);
    });
  }

  goBack() {
    this.router.navigate(['/lists']);
  }
}
