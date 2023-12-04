import {
  Box,
  Button,
  H1,
  H2,
  Statistic,
  StatisticItem,
} from './Feedback.styled';

function Feedback() {
  return (
    <Box>
      <H1>Please leave feedback</H1>
      <Button>Good</Button>
      <Button>Neutral</Button>
      <Button>Bad</Button>
      <H2>Statistics</H2>
      <Statistic>
        <StatisticItem>
          Good: <span>0</span>
          {/* Good:<span>{good}</span> */}
        </StatisticItem>
        <StatisticItem>
          Neutral: <span>0</span>
          {/* Neutral:<span>{neutral}</span> */}
        </StatisticItem>
        <StatisticItem>
          Bad: <span>0</span>
          {/* Bad:<span>{bad}</span> */}
        </StatisticItem>
        <StatisticItem>
          Total: <span>0</span>
        </StatisticItem>
        <StatisticItem>
          Positive feedback: <span>0</span>
        </StatisticItem>
      </Statistic>
    </Box>
  );
}

export default Feedback;
