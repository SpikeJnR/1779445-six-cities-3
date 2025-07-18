import getStarsRating from '../place-card/utils.ts';
import { CommentsType } from './comment-type.ts';
import formatDateToMonthYear from './utils.ts';

type CommentProps = {
  comment: CommentsType;
};

export default function Comment({ comment }: CommentProps) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={comment.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name"> {comment.user.name} </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: getStarsRating(comment.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment.comment}</p>
        <time className="reviews__time" dateTime={comment.date}>
          {formatDateToMonthYear(comment.date)}
        </time>
      </div>
    </li>
  );
}
