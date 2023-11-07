import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent {
  @Input() product: any;
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();
  editProductForm:any= FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.editProductForm = this.formBuilder.group({
      name: [this.product.name, Validators.required],
      gender: [this.product.gender, Validators.required],
      price: [this.product.price, [Validators.required, Validators.min(0)]],
      currency: [this.product.currency, Validators.required],
      color: [this.product.color, Validators.required],
      quantity: [this.product.quantity, Validators.required],
      image: [this.product.image, Validators.required],
    });
  }

  onSubmit() {
    if (this.editProductForm.valid) {
      this.save.emit({
        ...this.product,
        ...this.editProductForm.value,
      });
      // localStorage.setItem('data',JSON.stringify(this.editProductForm))
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}