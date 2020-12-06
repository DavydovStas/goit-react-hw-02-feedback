import Notification from './Notification'

export default function Statistics(props) {
  const { 
    good, neutral, bad, total, positivePercentage
  } = props
  return (
    <ul className='statistics-list'>
      <li className='statistics-item'>Good: {good}</li>
      <li className='statistics-item'>Neutral: {neutral}</li>
      <li className='statistics-item'>Bad: {bad}</li>
      {total > 0 ? (<><li className='statistics-item total'>Total: {total}</li>
              <li className='statistics-item positive-percentage'>Positive feedback: {positivePercentage}%</li></>)
            : (<Notification message="No feedback given"/>) }
    </ul>
  )
 }