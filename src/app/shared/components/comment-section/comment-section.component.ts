import { Component, Input } from '@angular/core';
import { Comment } from '../../models/comment';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
    selector: 'app-comment-section',
    templateUrl: './comment-section.component.html',
    styleUrl: './comment-section.component.scss',
    imports: [MatFormField, MatLabel, MatInput, MatButton, MatTooltip]
})
export class CommentSectionComponent {
  @Input() comments: Comment[] = [];

  getChildComments(parentId: number): Comment[] {
    return this.comments.filter((comment) => comment.parentId === parentId);
  }
}
