import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  txtInput: FormControl;
  @Input() text = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    ) {
      this.txtInput = new FormControl('', Validators.required);
    }

    ngOnInit(): void {
      this.txtInput.setValue(this.text);
    }

  search() {
    this.router.navigate(['/items'], {queryParams: {search: this.txtInput.value}});
  }

}
