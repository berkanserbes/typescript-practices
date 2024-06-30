
interface ICourseGoal {
    title: string
    description: string
}

const CourseGoal : React.FC<ICourseGoal> = ({title, description}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default CourseGoal

