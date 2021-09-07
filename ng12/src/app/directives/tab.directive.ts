import { AfterContentInit, ContentChild, ContentChildren, Directive, ElementRef, HostBinding, HostListener, Input, QueryList } from "@angular/core";

@Directive({
    selector:'[showOneDir]'
})
export class ShowOneDir
{
    constructor() {}

    @Input('showOneDir') id!: string;
    @Input()active: boolean = false;
  
    @HostBinding('hidden')
    getHidden(){
        return !this.active;
    }

    
}

@Directive({
    selector:'[showOneContainorDir]'
})
export class ShowOneContainorDir implements AfterContentInit{
    ngAfterContentInit(): void {
       console.log(this.children)
    }
   
    @ContentChildren(ShowOneDir)
    children!:QueryList<ShowOneDir>

    // add(item: ShowOneDir){ this.children.push(item) }
    show(id:any){
        this.children.forEach(i=> { 
            console.log(i)
            i.active = id === i.id ? true: false;
        } );
    }
}

@Directive({
    selector:'[showOneLinkDir]'
})
export class ShowOneLinkDir
{
    @Input('showOneLinkDir') id!: string;

    constructor(private containor: ShowOneContainorDir) { }

    @HostListener('click', ['$event'] )
    onCLick(e:any){
        console.log('%c Table Clicked', 'color:red');
        this.containor.show(this.id);
    }
}

