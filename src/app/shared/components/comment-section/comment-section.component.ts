import { Component, Input } from '@angular/core';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrl: './comment-section.component.scss',
})
export class CommentSectionComponent {
  @Input() comments: Comment[] = [];

  getChildComments(parentId: number): Comment[] {
    return this.comments.filter((comment) => comment.parentId === parentId);
  }
}
