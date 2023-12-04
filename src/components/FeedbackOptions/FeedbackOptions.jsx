import { Button } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options.map(option => {
        return (
          <li key={option}>
            <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
          </li>
        );
      })}
    </ul>
  );
}

export default FeedbackOptions;
