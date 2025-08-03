import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  @Input() value: string = 'Sanvi Rahman';

  @Output() valueChange: any= new EventEmitter();


  constructor() {
    console.log('Constructor called');
  }


   ngOnChanges(changes: any) {
    this.valueChange.emit(this.value);
    console.log('ngOnChanges called');
    // console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }


  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }
}
