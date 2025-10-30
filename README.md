# Anima International Thank You PDF Generator
A Simple React.js application, that allows the user to enter in their first and last name into a form, which will then be used to generate a custom 

## How To Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/JackGerry1/Anima-Custom-Thankyou-PDF-Generator
```
### 2. Change Into Project Directory
```bash
cd Anima-Custom-Thankyou-PDF-Generator/
```
### 3. Install Dependencies 
```bash
npm install
```
### 4. Run Locally
```bash
npm run dev
```

### 5. Click On the Link Provided From The Previous Command
There should be a link to in the console similar to: http://localhost:5173/

## How I Deployed This Project
I deployed this project using Vercel, following there instructions, it can be found here: https://anima-thankyou-pdf-generator.vercel.app/

## Project Structure
```
public/                   
src/
├── assets/
│   └── thankYouImage.png         
├── components/        
│   ├── CustomThankYouPDF.jsx        
│   ├── FormInput.jsx    
│   ├── GeneratePDFButton.jsx
│   └── Header.jsx
├── pages/             
│   └── ThankYouPage.jsx                     
├── services/          
│   └── pdfService.jsx                            
├── utils/
│   └── thankYouMessage.js                       
├── styles/
│   ├── CustomThankYouPDF.css        
│   ├── FormInput.css    
│   ├── GeneratePDFButton.css
│   └── Header.css                        
├── App.jsx            
├── main.jsx           
├── index.html            
.gitignore
package.json
vite.config.js
README.md
```

## Features
- Form for users to enter first and last name. 
- Based on their input, it generates a custom thank you PDF, including their name. 
- Works on mobile and desktop devices.
- Accesssibility features implemented.

## Tech Stack 
- React.js (React-pdf library for PDF generation)
- Vite (Build Tool)
- Standard CSS for styling

## Accesiblity Features
The following features were added to improve accessibility:
- All form elements have associated labels for screen readers.
- The application supports keyboard navigation.
- There is enough colour contrast between text and background. 
- It is responsive and works well on mobile devices. 