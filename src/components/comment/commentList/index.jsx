import CommentItem from '@components/comment/commentItem';
import parseDate from '@utils/parseDate';

export default function CommentList({ commentList }) {
    return (
        <ul>
            {commentList &&
                commentList.map((comment, index) => {
                    const [year, month, day] = parseDate(comment.createdAt);
                    return (
                        <CommentItem
                            key={index}
                            commentFrom={comment.author.username}
                            commentorImg={comment.author.image}
                            commentYear={year}
                            commentMonth={month}
                            commentDay={day}
                            comment={comment.content}
                            id={comment.author.accountname}
                        />
                    );
                })}
        </ul>
    );
}
