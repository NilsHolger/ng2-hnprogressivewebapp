import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commenttree',
  templateUrl: './commenttree.component.html',
  styleUrls: ['./commenttree.component.scss']
})
export class CommentTreeComponent implements OnInit {
  @Input() commentTree;

  constructor() { }

  ngOnInit() { }

}
