interface ICourseGoal {
  title: string;
  description: string;
  handleClick: () => void;
}

const CourseGoal: React.FC<ICourseGoal> = ({
  title,
  description,
  handleClick,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
};

export default CourseGoal;
