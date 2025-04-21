import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
	selector	: '[appClickOutside]'
})
export class ClickOutsideDirective {
	@Output() appClickOutside	= new EventEmitter<void>();
	@Input() appClickOutsideEnabled = true; // ← lo controlas desde el template

	constructor( private elementRef: ElementRef ) {}

	@HostListener('document:click', ['$event.target'])
	public onClick(target: HTMLElement) {
		if (!this.appClickOutsideEnabled) return;
		const clickedInside	= this.elementRef.nativeElement.contains(target);
		if (!clickedInside) {
			this.appClickOutside.emit();
		}
	}
}
