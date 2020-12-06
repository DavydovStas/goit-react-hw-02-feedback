export default function FeedbackOptions(props) { 
  const { buttonNames, onButtonClick} = props
  return (
    <div className='feedback-buttons'>
          {buttonNames.map(
            btnName => {
              return (<button type='button' name={btnName} onClick={onButtonClick} key={btnName}>{btnName}</button>)
            }
          )}
    </div>)
}