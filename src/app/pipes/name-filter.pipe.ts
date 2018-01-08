import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if(!items) return [];
    if(!searchTerm) return items;

    searchTerm = searchTerm.toLowerCase();

    return items.filter ( it => {
      return it.name.toLowerCase().includes(searchTerm);
    });
  }

}
