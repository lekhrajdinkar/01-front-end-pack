import { from, of } from 'rxjs';
// For CommonJS compatibility
const demo  = (operator: any) => {
    from([1, 2, 3, 4, 5])
        .pipe( operator((x: number) => of(x * 2)) )
        .subscribe({
            next: (value) => console.log(value),
            error: (err) => console.error('Error:', err),
            complete: () => console.log(`${operator.name} Completed`)
        });
}

//demo(mergeMap);