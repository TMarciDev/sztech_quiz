# Canvas quiz extractor and practice field 1.0.2

## Extract and Add a New Dataset

To incorporate a new dataset into the `sztech_quiz` project, follow these steps:

1. Download the solved canvas quiz as an HTML file.
2. Open the `js_extract/index.js` file and locate the line `` const site = `<HERE>` ``
3. Replace `<HERE>` with the HTML code from the downloaded canvas quiz.
4. Save the `js_extract/index.js` file.

Next, proceed with the following:

1. Open the `js_extract/index.html` file.
2. Copy the displayed output within the file.
3. Locate the existing array in the `questions.js` file that you want to overwrite.
4. Paste the copied output, replacing one of the existing arrays in the questions.js file.

Note the following considerations while working with the extractor:

- The extractor is optimized for extracting "pick one and only one" type questions.
- For free answer questions, the extractor will only display the result, as there is no logic behind it.
- For multiselect questions, check the extracted values and add the `multiselect: true` attribute to the question object. Refer to the example for guidance. (Or you might just code it for yourself bruh)
- When working with images, manually download and reference them in the question. See the example for clarification. (Same thing with the self coding thing as before)
- Due to possible changes in the Canvas page the true answers might not be corrctly set. Check it manually

To view the quiz, open the `index.html` file in a web browser.

Happy learning! ʕ •ᴥ•ʔ