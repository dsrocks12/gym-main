const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://localhost:27017/login_gym");

connect.then(() => {
    console.log("db connected");
}).catch((err) => {
    console.log(err);
});

// Login Schema
const loginSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true }
});

// UserDetails Schema
const userDetailsSchema = new mongoose.Schema({
    username: { type: String },
    gender: { type: String },
    age: { type: String },
    height: { type: Number },
    weight: { type: Number },
    meal: { type: String },
    experience: { type: String },
    waterIntake: { type: String },
    frequency: { type: Number },
    email: { type: String },
    goal: { type: String }
});

// Exercise Template Schema (for each goal)
const exerciseTemplate = new mongoose.Schema({
    img: { type: String },
    content: { type: String }
});

// Diet Template Schema (for each goal)
const dietTemplate = new mongoose.Schema({
    bmi: { type: Number },
    content: { type: String }
});

// Exercise Schema (with objects for each goal)
const exerciseSchema = new mongoose.Schema({
    Fatloss: {
        bmi1: { type: exerciseTemplate },
        bmi2: { type:  exerciseTemplate},
        bmi3: { type:  exerciseTemplate},
        
    },
    Musclegain: {
        bmi1: { type:  exerciseTemplate },
        bmi2: { type:  exerciseTemplate },
        bmi3: { type:  exerciseTemplate }
    },
    Endurance: {
        bmi1: { type:  exerciseTemplate},
        bmi2: { type:  exerciseTemplate },
        bmi3: { type:  exerciseTemplate },

    }
});

// Diet Schema (with objects for each goal)
const dietSchema = new mongoose.Schema({
    Fatloss: {
        bmi1: { type: dietTemplate },
        bmi2: { type: dietTemplate },
        bmi3: { type: dietTemplate }
    },
    Musclegain: {
        bmi1: { type: dietTemplate },
        bmi2: { type: dietTemplate },
        bmi3: { type: dietTemplate }
    },
    Endurance: {
        bmi1: { type: dietTemplate },
        bmi2: { type: dietTemplate },
        bmi3: { type: dietTemplate }
    }
});

// Models
const diet = mongoose.model("userDiet", dietSchema);
const exercise = mongoose.model("userExercise", exerciseSchema);
const collection = mongoose.model("users", loginSchema);
const UserDetails = mongoose.model("UserDetails", userDetailsSchema);

// Export the models
module.exports = {
    collection,
    UserDetails,
    diet,
    exercise
};
