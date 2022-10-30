import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCharUppercase'
})
export class FirstCharUppercasePipe implements PipeTransform {

  transform(value: string): string {

      // va cherche le premier caractere et le met en MAJ
    const firstCharUppercase = value.charAt(0).toUpperCase;
    // suppe le premier cara de la value
    const subStr = value.substring(1);
    // il concatene le cara en maj et le reste deal valeu
    return firstCharUppercase  + subStr
  }

}
