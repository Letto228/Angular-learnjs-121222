import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByParam'
})
export class FilterByParamPipe implements PipeTransform {

  transform<T, K extends keyof T>(
    products: T[],
    filterName: K,
    filterValue1: T[K],
    filterValue2: T[K] | null,
    filterOperation: string = "eq"
  ): T[] {
    return products.filter(product =>{
      const provuctValue = product[filterName];

      if (filterOperation === "eq") {
        return provuctValue === filterValue1;
      }
      if (filterOperation === "ne") {
        return provuctValue !== filterValue1;
      }
      if (filterOperation === "lt") {
        return provuctValue < filterValue1;
      }
      if (filterOperation === "le") {
        return provuctValue <= filterValue1;
      }
      if (filterOperation === "ht") {
        return provuctValue > filterValue1;
      }
      if (filterOperation === "he") {
        return provuctValue >= filterValue1;
      }
      if (filterOperation === "bw" && filterValue2) {
        return provuctValue >= filterValue1 && provuctValue <= filterValue2;
      }
      if (filterOperation === "nb" && filterValue2) {
        return provuctValue < filterValue1 && provuctValue > filterValue2;
      }
      if (filterOperation === "like" && typeof filterValue1 === 'string' && typeof provuctValue === 'string') {
        return provuctValue.toLowerCase().includes(filterValue1.toLowerCase());
      }
      return false;
    });
  }

}
