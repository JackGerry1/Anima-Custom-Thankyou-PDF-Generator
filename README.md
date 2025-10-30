# Anima International Thank You PDF Generator
A Simple React.js application, that allows the user to enter in their first and last name into a form, which will then be used to generate a custom 


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