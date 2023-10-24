
// Importing all required module
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs"

inquirer
    // 1. Use the inquirer npm package (inside .prompt in inquirer) to get user input.
    .prompt([
        {
            message: "Type your URL:",
            name: "URL"
        }
    ])


    // 2. Use the qr-image npm package(inside .then in inquirer) to turn the user entered URL into a QR code image.
    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image(url);

        qr_svg.pipe(fs.createWriteStream("Generated_QR_img.png"));


        // 3. Create a txt file to save the user input using the native fs node module.basically link of the qr code will be stored there.
        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("The txt file having QR Code link has been saved!");
          });
    })
    
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });


