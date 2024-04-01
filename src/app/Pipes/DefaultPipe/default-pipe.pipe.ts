import { Pipe, PipeTransform } from '@angular/core';
import { Student} from "../../models/student";

@Pipe({
  name: 'defaultPipe',
  standalone: true,
  pure: true //this is true by default, it is not included
})
export class DefaultPipePipe implements PipeTransform {

  transform(content: Student, dType?:string): string {
    return content.studentName ?? dType ?? 'defualt';
  }

}
