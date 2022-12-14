const {
    v4: uuidv
} = require("uuid")
const Workout = require('../database/Workout')

const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts()
    return allWorkouts
}

const getOneWorkout = () => {
    return
}
const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleDateString("en-US", {
            timeZone: "UTC"
        }),
        updatedAd: new Date().toLocaleDateString("en-US", {
            timeZone: "UTC"
        })
    }
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout
}

const updateOneWorkout = () => {
    return
}

const deleteOneWorkout = () => {
    return
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}