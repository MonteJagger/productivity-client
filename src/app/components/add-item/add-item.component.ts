import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemService } from 'src/app/services/item/item.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  uploadedFile;
  newItem: any = {};
  @Output() refreshListOutput = new EventEmitter();
  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.newItem.status = 'not started'; // set as default
  }

  handleFileInput(files) {
    this.uploadedFile = files.item(0);
    console.log(this.uploadedFile);
  }

  save(newItemForm) {
    let formData = new FormData();
    formData.append('itemName', this.newItem.itemName);
    formData.append('description', this.newItem.description);
    formData.append('subject', this.newItem.subject);
    formData.append('goalDate', this.newItem.goalDate);
    formData.append('status', this.newItem.status);
    if (this.uploadedFile) { formData.append('attachmentUrl', this.uploadedFile, this.uploadedFile.name); }


    console.log('saving item');
    console.log(formData);
    this.itemService.createItem(formData)
      .subscribe(item => {
        console.log('item created');
        console.log(item);
        this.refreshListOutput.emit();
        newItemForm.reset();
      });
  }
}


