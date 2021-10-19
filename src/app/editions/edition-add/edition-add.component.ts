import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edition-add',
  templateUrl: './edition-add.component.html',
  styleUrls: ['./edition-add.component.css']
})
export class EditionAddComponent implements OnInit {

  editionForm: FormGroup;
  constructor(private fb : FormBuilder) { 
    this.editionForm = this.fb.group({
      
    });
  }

  ngOnInit(): void {
    this.editionForm = this.fb.group({
      code: ["", Validators.required ],
      description: ["", Validators.required],
      startDate: ["", Validators.required],
      realPrice: ["", Validators.required]  
    });
  }

  save() : void{
    console.log(this.editionForm.value);
  }
}
