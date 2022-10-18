const Course = ({course}) =>{
    const total = course.parts.reduce((s,v) => s + v.exercises,
    0,);
  
    return(
      <div>
        <h2>{course.name}</h2>
        <ul>
          {course.parts.map(part => <li key = {part.id}>
            {part.name} {part.exercises}
            </li>
            )}
        </ul>
        <h4>Total amount of exercises {total}</h4>
      </div>
    )
  }

  export default Course