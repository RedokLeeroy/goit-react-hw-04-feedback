import { useState } from "react";
import {Statistics} from "./Statistics/Statistics"
import { FeedbackOptions } from "./Feedback/Feedback";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export const App = () => {
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);

  const handleFeedback = (event) =>{
    const { name } = event.target
    
    if(name === "good"){
    setGood(ps => {return ps + 1})
    }else if (name === "neutral") {
    setNeutral(ps => {return ps + 1})
    }else if (name === "bad"){
    setBad(ps => {return ps + 1})
    }

  }

  const countTotalFeedback = () =>{
    const result = good + neutral + bad
    return result
  } 

const countPositiveFeedbackPercentage = () =>{
     const result = good * 100 / countTotalFeedback()
     return Math.round(result)
}
  
return (<>
      <Section title="Please leave feedback">
      <FeedbackOptions onLeaveFeedback={handleFeedback} options={["good", 'neutral', 'bad']}/>
      </Section>
      <Section title="Statistics">
      {countTotalFeedback() !== 0?<Statistics good={good} neutral={neutral} bad={bad} total ={countTotalFeedback()} percentage={countPositiveFeedbackPercentage()} />:<Notification message="There is no feedback"></Notification>}
      </Section>
      </>
    )
}

