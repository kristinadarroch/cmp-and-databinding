import { Component,
         OnInit,
         Input, 
         ViewEncapsulation, 
         OnChanges, 
         SimpleChanges,
         DoCheck,
         AfterContentInit,
         AfterContentChecked,
         AfterViewInit,
         AfterViewChecked,
         OnDestroy,
         ViewChild,
         ElementRef,
         ContentChild
       } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // you can apply styles globally
  encapsulation: ViewEncapsulation.Emulated //None, Native

})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // from parent to child
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  // must add alias to ViewChild and type
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { 
    console.log('constructor called!!');
   }

   ngOnChanges(changes: SimpleChanges) {
     //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
     //Add '${implements OnChanges}' to the class.
     console.log('ngOnChangesCalled!');
     console.log(changes);
   }

  ngOnInit() {
    console.log('ngoninit called!');
    // the elements in your DOM haven't been rendered yet
    console.log('text content:' + this.header.nativeElement.textContent);
    console.log('text content of paragraph' + this.paragraph.nativeElement.textContent);
    
    
  }
  
  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(){
    // ngContent
    console.log('ngAfterContentInit called!');
    console.log('text content of paragraph' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }
 
  ngOnDestroy(){
    console.log('ngOnDestroy called!');
    
  }
}
