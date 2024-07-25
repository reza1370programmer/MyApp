import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMinLength]',
  standalone: true
})
export class MinLengthDirective {

  @Input('appMinLength') minLength: number=0;
  constructor(private el: ElementRef) {}
  @HostListener('input') myinput() {
    const inputValue: string = this.el.nativeElement.value;
    if (inputValue.length < this.minLength) {
      this.el.nativeElement.setCustomValidity(`Minimum length is ${this.minLength} characters.`);
    } else {
      this.el.nativeElement.setCustomValidity('');
    }
  }

}
