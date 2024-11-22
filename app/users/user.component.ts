import { Component,EventEmitter,Input,Output } from '@angular/core';
import { CardComponent } from "../shared/card/card.component";


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input ({required:true}) user! : {
    id : string;
    avatar : string;
    name : string;
  }
  @Input ({required:true}) selected : boolean | undefined;
  @Output () select = new EventEmitter();

  get imagePath(){
    return'assets/users/'+this.user.avatar;
  }
  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
