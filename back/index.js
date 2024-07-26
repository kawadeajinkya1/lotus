const PORT = 8001;
//const PORT = process.env.PORT || 8001

const express = require('express')
//
const cors = require('cors')
const path = require('path');
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const nodemailer = require('nodemailer')


const app = express()
app.use(express.json())
app.use(cookieParser());

app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
    }));


    /*

app.use(cors(
    {
        origin: ["https://lotus.exads.in"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
    }));


    */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



/*

const db= mysql.createConnection({

    host: "lotus.exads.in",
    user: "wvxiotea_lotus",
    password: "lotus@123##",
    database: "wvxiotea_lotus"
})
*/

app.post('/sendemail', (req, res) => {
    const formData = req.body; // Form data sent from the frontend

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ajinkyak1920@gmail.com', // Your Gmail email address
            pass: 'ffan egoe xsdo pxxb' // Your Gmail password
        }
    });

    // Construct email body using form data
    const mailOptions = {
        from: '{formData.email}', // Sender email address
        to: 'ganesh543215@gmail.com', // Recipient email address
        subject: 'Form Submission For Hotel Booking', // Email subject
        html: `
            <h1>Form Submission</h1>
            <p>Name: ${formData.name}</p>
            <p>Gender: ${formData.gender}</p>
            <p>Age :${formData.age}</p>
            <p>Identity : ${formData.identification}</p>
            <p>Id No : ${formData.identificationNumber}</p>
            <p>Email Id : ${formData.email} </p>  
            <p>Mobile No : ${formData.mobno} </p>
              <p>Check-in Date: ${formData.checkInDate}</p>
                <p>Check-in Time: ${formData.checkInTime}</p>
                <p>Check-out Date: ${formData.checkOutDate}</p>
                <p>Check-out Time: ${formData.checkOutTime}</p>
                <p>No of Adults: ${formData.numOfAdults}</p>
                <p>No of Children: ${formData.numOfChildren}</p>
                <p>Room Type: ${formData.roomType1}</p>
                <p>AC / Non AC: ${formData.roomType}</p>
                <p>No of Beds: ${formData.numOfBeds}</p>
                <p>No of Rooms: ${formData.numOfRooms}</p>
                <p>Price: ${formData.price}</p>
                <p>Total Price: ${formData.Totalprice}</p>
          `

    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ');
            res.status(200).send('Email sent successfully');
        }
    });
});





app.post('/')

app.get('/my', (req, res) => {
    res.json('myapi')
})


/*

if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    //any route that is not api will be redirected to index.html
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    });
} else {
    app.get('/', (req, res) => {
        res.send('api is runing...')
    });
}


*/

app.listen(PORT, () => {
    console.log("\Ab ki Bar 400 Parr -Lotus");
})

