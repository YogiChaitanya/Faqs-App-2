// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bg-container">
      <div className="card-container">
        <h1 className="main-heading">FAQs</h1>
        <ul className="list-container">
          {faqsList.map(eachQuestion => (
            <FaqItem key={eachQuestion.id} faqDetails={eachQuestion} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
