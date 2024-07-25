import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MinLengthDirective } from './min-length.directive';
import { DatePipe, DecimalPipe, JsonPipe } from '@angular/common';
import { MypipePipe } from './pipes/mypipe.pipe';
import { MyserviceService } from './services/myservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [MyserviceService],
  imports: [RouterOutlet, DatePipe, MinLengthDirective, JsonPipe, DecimalPipe, MypipePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  counter = 0
  constructor(public myService: MyserviceService) {
  }
  
  @HostListener('window:keydown.enter', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.counter++;
  }

  title = 'this is my app';
  myDate = new Date();
  myJson = { firstname: 'reza', lastname: 'ahmadi', age: 30 };
  myNumber = 6498133989756;
  // myObject = { firstname: 'ali', lastname: 'alizade', average: 15 }
  values: string[] = ['apple', 'banana', 'carrot', 'date'];

  addToService(num: string) {
    this.myService.myArray.push(num)
  }
}
