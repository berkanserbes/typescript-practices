import "./App.css";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";

function App() {
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
