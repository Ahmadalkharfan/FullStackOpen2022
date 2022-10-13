import React from "react"

const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ parts }) => {
    const sum = parts.reduce((num, part) => {
        return num + part.exercises;
    }, 0);

    return (<p><b>Number of exercises {sum}</b></p>
    )
}

const Part = ({ name, exercises }) =>
    <p>
        {name} {exercises}
    </p>

const Content = ({ parts }) => {
    return (
        <>
            {parts.map((part) => (
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            ))}
        </>
    )
}

const Course = ({ courses }) => {
    return (
        <>
        <h1>Web development curriculum</h1>
        {courses.map((course) => (
            <div key={course.id}>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
            </div>
            ))}
        </>
    )
}

export default Course