import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten', pure: true
})
export class ShortenPipe implements PipeTransform
{
    static DEFAULT_LEN = 10;

    transform(value: string, ...args: number[]) {
        const len = args[0] || ShortenPipe.DEFAULT_LEN;
        console.log("%c Args :: ", "color:green", len)
        if(value.length >= len)
            return value.substr(0,len )+ ' ...';
        else
            return value;
    }
}

@Pipe({
    name: 'ng12_filter', 
    pure: false
})
export class FilterPipe implements PipeTransform
{
    static DEFAULT_VALUE = '';
    
    transform(value: string[], ...args: any[]) {
        const text = args[0] || FilterPipe.DEFAULT_VALUE;
        console.log("%c Args :: ", "color:green", text)
        const result = text === '' ? value : value.filter(s=> text.includes(s));
        console.log(result);
        return result;
    }
}