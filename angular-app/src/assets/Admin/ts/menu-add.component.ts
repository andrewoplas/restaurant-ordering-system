import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuService } from '@services/menu.service';

@Component({
  selector: 'app-menu-add',
  templateUrl: '../html/menu-add.component.html',
  styleUrls: ['../scss/menu-add.component.scss']
})
export class MenuAddComponent implements OnInit {
  title = "MENU"

  forms = this.fb.group({
    name: ["", Validators.required],
    description: ["", Validators.required],
    show: [""]
  });

  constructor(
    private fb:FormBuilder,
    private menuService: MenuService
  ) { }

  ngOnInit() {
  }

  create() {
    let menu = {      
      id: 0,
      name: this.forms.value.name,
      description: this.forms.value.description,
      menu_items: null,
      show: this.forms.value.show,
    };

    console.log(menu);
    this.menuService.addMenu(menu).subscribe(
      data => {
        console.log(data);
      }
    );
    
      console.log('menu end');

  }

}
