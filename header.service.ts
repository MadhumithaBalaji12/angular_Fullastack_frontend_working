import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {
private titleSource=new Subject<string>();
currentTitle=this.titleSource.asObservable();
changeTitle(title:string)
{
  this.titleSource.next(title);
}
}









