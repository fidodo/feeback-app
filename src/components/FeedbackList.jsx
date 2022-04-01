import{motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedback, handleDelete}) {
    if(!feedback || feedback.length === 0){
        return<p>No feedback yet!</p>
    }
    return (
      <div className="feedback-list">
        <AnimatePresence>
          {feedback.map((item)=>(
            <motion.div
            key={item.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}>
              {/* <div>{item.rating}</div> */}
              <FeedbackItem key={item.id} item={item} 
              handleDelete={handleDelete}/>
              </motion.div>
          ))}
          </AnimatePresence>
          </div>
    )


    // return without the animation
  // return (
  //   <div className="feedback-list">
  //       {feedback.map((item)=>(
  //           // <div>{item.rating}</div>
  //           <FeedbackItem key={item.id} item={item} 
  //           handleDelete={handleDelete}/>
  //       ))}
  //       </div>
  // )
}

export default FeedbackList
