import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[gamePreview]'
})
export class PreviewDirective {

  gamePositTop!: any
  windowHeight!: any
  revealPoint = 350;

  constructor( private ele: ElementRef,
              private renderer: Renderer2) {
   }

  @HostListener("document:scroll") onHover() {
    this.gamePositTop = this.ele.nativeElement.getBoundingClientRect().top;
    this.windowHeight = window.innerHeight;

    if (this.gamePositTop < -20) {
        this.renderer.removeClass(this.ele.nativeElement, "reveal")
    }
    if (this.gamePositTop < (this.windowHeight - this.revealPoint)) {
        this.renderer.addClass(this.ele.nativeElement, "reveal")
    }
    if (this.gamePositTop > this.windowHeight) {
        this.renderer.removeClass(this.ele.nativeElement, "reveal")
    }

    // console.log("Hi, I'm scrolling");
  }

}
