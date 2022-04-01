import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
//Calculate ratings avg
let ratingAvg =feedback.reduce((acc, cur) =>{
  return (acc + cur.rating)
}, 0)/feedback.length

ratingAvg = ratingAvg.toFixed(1)

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(ratingAvg) ? 0: ratingAvg }</h4>
    </div>
  )
}

FeedbackStats.propTypes={
  feedback:PropTypes.array.isRequired,
}

export default FeedbackStats