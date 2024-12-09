import "./App.css";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import { useState } from "react";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [goals, setGoals] = useState<Array<CourseGoal>>([]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function addGoalHandler(goal: CourseGoal) {
    setGoals((prevGoals) => [...prevGoals, goal]);
  }

  return (
    <div>
      <Header image={{ src: "asdasd.jpeg", alt: "Image description" }}>
        <h1>Your course goals</h1>
      </Header>

      <CourseGoal
        title="Learn TypeScript with React"
        description="I am learning TypeScript with React via this course"
        handleClick={() => alert("Button clicked")}
      />
    </div>
  );
}

export default App;
