const createStudent = () => {
    const pritesh = {
        student: "Pritesh Zaver",
        grade: 12
    }
    return pritesh
}

const addMathGrade = (mathGrade) => {
    mathGrade.math = "B"

    return mathGrade
}

const addHistoryGrade = (historyGrade) => {
    historyGrade.history = "C"

    return historyGrade
}

const addScienceGrade = (scienceGrade) => {
    scienceGrade.science = "A"

    return scienceGrade
}

const student = createStudent()
const addMath = addMathGrade(student)
const addHistory = addHistoryGrade(student)
const addScience = addScienceGrade(student)

console.log(student)