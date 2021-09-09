import { Directive, Input, HostListener, ViewContainerRef } from "@angular/core";
import { ShowOneContainorDir } from "./tab.directive";

@Directive({
    selector:'[place-holder]'
})
export class PlaceHolderDirective{
    constructor(public viewContainerRef: ViewContainerRef) { }
}