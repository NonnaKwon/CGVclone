
function ReviewCard({comment}){
    return(
      <div className="review_card_container">
          <div className="id">{comment.user_id}</div>
          <div className="comment">{comment.content}</div>
          <div className="day">{comment.created_date}</div>
          <div className="like">좋아요 : {comment.likes}</div>
      </div>
    );
}

export default ReviewCard;