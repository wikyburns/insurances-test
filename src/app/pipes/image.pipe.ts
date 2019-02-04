import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform( img: string, type: string ): any {

    if ( !img ) {
      return 'assets/img/noimage.png';
    }

    if ( img.indexOf('https') >= 0 ){
      return img;
    }

    switch ( type ) {

      case 'brand':
        return 'assets/img/brand/' + img;
      break;

      case 'kind':{
        if('assets/img/kind/' + img)
          return 'assets/img/kind/' + img;
        else
          return 'assets/img/noimage.png';
      }
      break;

      default: 
        return 'assets/img/noimage.png';
    }

  }
}
