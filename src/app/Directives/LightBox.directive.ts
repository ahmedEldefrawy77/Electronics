import { Directive, ElementRef, HostListener,Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges{
 @Input('LightBox') defaultColor:string="darkblue";
 @Input() hightlightcolor:string="gray"
 highlightColor:string="green";
  constructor(private elemRef:ElementRef) 
  {
    
   }
   ngOnChanges(changes: SimpleChanges): void {
    this.elemRef.nativeElement.style.border=`2px solid ${this.defaultColor}`;
   }
@HostListener('mouseover') onMouseOver(){
  this.elemRef.nativeElement.style.border="2px solid green"
 }
 @HostListener('mouseout') onMouseOut(){
  this.elemRef.nativeElement.style.border="2px solid yellow"
 }
}