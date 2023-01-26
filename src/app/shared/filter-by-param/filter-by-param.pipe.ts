import { Pipe, PipeTransform } from '@angular/core';
import { FilterOperation } from 'src/app/shared/filter-by-param/filter-operation.const'

@Pipe({
  name: 'filterByParam'
})
export class FilterByParamPipe implements PipeTransform {

  transform<T, K extends keyof T>(
    products: T[],
    filterName: K,
    filterValueMin: T[K],
    filterOperation: FilterOperation = FilterOperation.Equals,
    filterValueMax: T[K] | null = null,
  ): T[] {
    return products.filter(product =>{
      const provuctValue = product[filterName];

      if (filterOperation === FilterOperation.Equals) {
        return provuctValue === filterValueMin;
      }
      if (filterOperation === FilterOperation.NotEquals) {
        return provuctValue !== filterValueMin;
      }
      if (filterOperation === FilterOperation.LessThat) {
        return provuctValue < filterValueMin;
      }
      if (filterOperation === FilterOperation.LessEquals) {
        return provuctValue <= filterValueMin;
      }
      if (filterOperation === FilterOperation.HeighThat) {
        return provuctValue > filterValueMin;
      }
      if (filterOperation === FilterOperation.HeighEquals) {
        return provuctValue >= filterValueMin;
      }
      if (filterOperation === FilterOperation.Beetwen && filterValueMax) {
        return provuctValue >= filterValueMin && provuctValue <= filterValueMax;
      }
      if (filterOperation === FilterOperation.NotBeetwen && filterValueMax) {
        return provuctValue < filterValueMin && provuctValue > filterValueMax;
      }
      if (filterOperation === FilterOperation.Like && typeof filterValueMin === 'string' && typeof provuctValue === 'string') {
        return provuctValue.toLowerCase().includes(filterValueMin.toLowerCase());
      }
      return false;
    });
  }

}
