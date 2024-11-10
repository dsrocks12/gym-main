const express = require('express');
const path = require('path'); 
const bcrypt = require('bcrypt');
const session = require('express-session');
const { collection, UserDetails, diet,exercise} = require("./config.js"); // Assuming this is correct

const PORT = process.env.PORT || 1212;

const app = express();

// Use session middleware
app.use(session({
    secret: '123',   // Replace with your own secret
    resave: false,
    saveUninitialized: true,
}));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Render login page
app.get('/login', (req, res) => {
    res.render('login');
});

// Render signup page
app.get('/', (req, res) => {
    res.render('signup');
});

// Render user details form
app.get('/UserDetails', (req, res) => {
    res.render('UserDetails');
});

// Render user goals form
app.get('/UserGoals', (req, res) => {
    res.render('UserGoals');
});

app.get('/ChooseGoal',(req,res)=>{
    res.render('ChooseGoal')
});

app.get('/fatLoss', (req, res) => {
    res.render('fatLoss');
});
app.get('/endurance', (req, res) => {
    res.render('endurance');
});
app.get('/muscleGain', (req, res) => {
    res.render('muscleGain');
});

app.get('/UserDiet', (req, res) => {
    res.render('UserDiet');
});


// Register users
app.post('/signup', async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password
    };

    const existingUser = await collection.findOne({ name: data.name });
    if (existingUser) {
        res.send("User already exists!");
    } else {
        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        data.password = hashedPassword;

        // Insert new user into the database
        const userdata = await collection.insertMany([data]);

        // Store username in session
        req.session.username = data.name; // Save username in session
        res.render("login");
        console.log(userdata);
    }
});

// Login users
app.post('/login', async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.username });
        // console.log(check);
        
        if (!check) {
            res.send('User name not found');
            return;
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (isPasswordMatch) {
            req.session.username = req.body.username; // Save username in session
            const isExist = await UserDetails.findOne({ username: req.body.username });
        // console.log(isExist);
        if(isExist==null){
            return res.redirect("/UserDetails"); // Redirect to UserDetails if login is successful
        }
        if(isExist.experience){
            res.redirect("/ChooseGoal")
        }
        
        } else {
            res.send("Wrong password");
        }

    } catch (error) {
        console.error(error);  // Log the error for debugging
        res.send("Something went wrong");
    }
    
});

// Handle UserDetails form submission
app.post('/UserDetails', async (req, res) => {
    const username = req.session.username; // Retrieve username from session

    
    // Ensure the username exists in the session
    if (!username) {
        return res.send("No user logged in");
    }

    try {
        // Check if the user already exists in UserDetails collection
        const isExist = await UserDetails.findOne({ username: username });

        const userDetails = {
            gender: req.body.gender,
            age: req.body.age,
            height: req.body.height,
            weight: req.body.weight,
            username: username,
        };

        if (isExist) {
            // Update existing user details
            const updatedUser = await UserDetails.findOneAndUpdate(
                { username: username },  // Ensure you match the exact field name in the schema
                { $set: userDetails },    // Add/update fields in the document
                { new: true }             // Return the updated document
            );
            console.log("Updated user details:", updatedUser);
            res.redirect("/UserGoals"); // Redirect to UserGoals page after updating
        } else {
            // Insert new user details if not found
            const userdata = await UserDetails.insertMany(userDetails);  // Use insertOne since it's a single document
            console.log("Inserted new user details:", userdata);
            res.redirect("/UserGoals"); // Redirect to UserGoals page after insertion
        }
    } catch (error) {
        console.error("Error in UserDetails:", error);
        res.status(500).send("An error occurred while updating user details.");
    }
});

// Handle UserGoals form submission
app.post('/UserGoals', async (req, res) => {
    // Retrieve the username from the session
    const username = req.session.username;

    // Check if the user document already exists in UserDetails
    const isExist = await UserDetails.findOne({ username: username });

    // Define the new fields to be added/updated
    const newGoals = {
        meal: req.body.meal,
        frequency: req.body.workout_frequency,
        experience: req.body.experience_level,
        waterIntake: req.body.water_reminder
    };

    // Conditionally add the `email` field if water intake is "yes"
    if (newGoals.waterIntake === "yes") {
        newGoals.email = req.body.email;
    }

    console.log("User goals to update:", newGoals);

    if (isExist) {
        // Update the existing document with new fields
        const updatedUser = await UserDetails.findOneAndUpdate(
            { username: username },  // Ensure you match the exact field name in the schema
            { $set: newGoals },       // Add/update fields in the document
            { new: true }             // Return the updated document
        );

        console.log("Updated user details:", updatedUser);
        res.redirect("/ChooseGoal");

    } else {
        res.status(404).send("User not found");
    }
});


app.post('/submitGoal',async (req, res) => {
    const data = {
        goal: req.body.goal // Changed from req.body.name to req.body.goal
    };
    console.log(data);
    const username = req.session.username; 
    
    const updatedUser = await UserDetails.findOneAndUpdate(
        { username: username },  // Ensure you match the exact field name in the schema
        { $set: data },       // Add/update fields in the document
        { new: true }             // Return the updated document
    );
    if(data.goal=="Fat Loss"){
        res.redirect('/fatLoss');
    }
    if(data.goal =="Muscle Gain"){
        res.redirect("/muscleGain");
    }
    if(data.goal =="Endurance"){
        res.redirect("/endurance");
    }
});

app.post('/diet', async (req, res) => {
    const username = req.session.username;  
    const isExist = await UserDetails.findOne({ username: username });

    // Check if user exists
    if (!isExist) {
        return res.status(404).send("User not found");
    }

    const { weight, height, goal } = isExist;
    const bmi = weight / ((height * 0.0254) ** 2);  // Correct BMI calculation: height in meters

    let data;

    // Checking if goal is 'Fat Loss'
    if (goal === 'Fat Loss') {
        if (bmi < 10) {
            data = await diet.findOne({ "Fatloss.bmi1": { $exists: true } });
        } else if (bmi >= 10 && bmi < 20) {
            data = await diet.findOne({ "Fatloss.bmi2": { $exists: true } });
        } else if (bmi >= 20) {
            data = await diet.findOne({ "Fatloss.bmi3": { $exists: true } });
        }
    }
    // Checking for other goals if necessary (e.g., Endurance, Muscle Gain)
    else if (goal === 'Endurance') {
        if (bmi < 10) {
            data = await diet.findOne({ "Endurance.bmi1": { $exists: true } });
        } else if (bmi >= 10 && bmi < 20) {
            data = await diet.findOne({ "Endurance.bmi2": { $exists: true } });
        } else {
            data = await diet.findOne({ "Endurance.bmi3": { $exists: true } });
        }
    } else if (goal === "Muscle Gain") {
        if (bmi < 10) {
            data = await diet.findOne({ "Musclegain.bmi1": { $exists: true } });
        } else if (bmi >= 10 && bmi < 20) {
            data = await diet.findOne({ "Musclegain.bmi2": { $exists: true } });
        } else {
            data = await diet.findOne({ "Musclegain.bmi3": { $exists: true } });
        }
    }

    // If no matching data is found, send 404 response
    if (!data) {
        return res.status(404).send("No matching diet found");
    }

    // Extract the content from the matched data based on the goal and BMI range
    let content;
    if (goal === 'Fat Loss') {
        content = data.Fatloss[`bmi${bmi < 10 ? 1 : bmi < 20 ? 2 : 3}`]?.content;
    } else if (goal === 'Endurance') {
        content = data.Endurance[`bmi${bmi < 10 ? 1 : bmi < 20 ? 2 : 3}`]?.content;
    } else if (goal === 'Muscle Gain') {
        content = data.Musclegain[`bmi${bmi < 10 ? 1 : bmi < 20 ? 2 : 3}`]?.content;
    }

    // Render the `showDiet` page if content is found; otherwise, send 404
    if (content) {
        res.render('UserDiet', { content });
    } else {
        res.status(404).send("Content not found for the selected goal");
    }
});

app.post('/exercise', async (req, res) => {
    const username = req.session.username;  
    const isExist = await UserDetails.findOne({ username: username });

    // Check if user exists
    if (!isExist) {
        return res.status(404).send("User not found");
    }

    const { goal } = isExist;  // Retrieve the user's goal

    let data;

    // Fetch exercises based on the user's goal (without any BMI filtering)
    if (goal === 'Fat Loss') {
        data = await exercise.findOne({ "Fatloss": { $exists: true } });
    } else if (goal === 'Endurance') {
        data = await exercise.findOne({ "Endurance": { $exists: true } });
    } else if (goal === 'Muscle Gain') {
        data = await exercise.findOne({ "Musclegain": { $exists: true } });
    }

    // If no matching data is found, send 404 response
    if (!data) {
        return res.status(404).send("No matching exercises found");
    }

    // Collect all exercises for the given goal
    let exercises = [];
    if (goal === 'Fat Loss') {
        exercises = Object.values(data.Fatloss);
    } else if (goal === 'Endurance') {
        exercises = Object.values(data.Endurance);
    } else if (goal === 'Muscle Gain') {
        exercises = Object.values(data.Musclegain);
    }
console.log(exercises);
    // Render `UserDiet` template, passing the `exercises` array
    res.render("UserExercises", { exercises });
});




// Start the server
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}!`);
});

