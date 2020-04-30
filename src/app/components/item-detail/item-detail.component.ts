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
  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem() {
    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id).subscribe(item => {
      this.item = item;
      if (this.item.displayUrl) {
        this.imgUrl = this.itemService.imgDisplayUrl + this.item.displayUrl;
      }
    });
  }

  goBack() {
    this.router.navigate(['/lists']);
  }
}
