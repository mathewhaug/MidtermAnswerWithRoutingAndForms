import { Pipe, PipeTransform } from '@angular/core';
import {Student} from "../../models/student";

@Pipe({
  name: 'contentTagged',
  standalone: true
})
export class ContentTaggedPipe implements PipeTransform {

  transform(contentList:Student[]) {
    return contentList.filter(c=> c.id >3 && c.id < 56);
  }

}
