import "./App.css";
import CourseGoal from "./components/CourseGoal";

function App() {
  return (
    <div>
      <CourseGoal
        title="Learn TypeScript with React"
        description="I am learning TypeScript with React via this course"
        handleClick={() => alert("Button clicked")}
      />
    </div>
  );
}

export default App;
