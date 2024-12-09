//import { type CourseGoal as CGoal } from "../App";

type CourseGoals = {
  title: string;
  description: string;
  id: number;
};

type CourseGoalListProps = {
  goals: CourseGoals[];
};

/* Other way to write the CourseGoalListProps type:
type CourseGoalListProps = { 
  goals: { title: string; description: string; id: number }[];
};
*/

const CourseGoalList: React.FC<CourseGoalListProps> = ({ goals }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>{goal.title}</li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
