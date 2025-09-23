# Document Generator Pro

A dynamic, client-side web application for efficiently generating standardized employee contracts. This tool is designed for HR and administrative professionals to create, preview, and download print-ready PDF contracts with ease.

This project has been upgraded to use a robust, programmatic PDF generation engine (**jsPDF**) for precise, pixel-perfect layout control, ensuring professional and consistent document output every time.

**[➡️ https://github.com/aronrodriguez024/DOCUMENT_GENERATOR]**

---

### 📸 Application Preview:

*(It is highly recommended to add a screenshot or a short GIF of the application in action here. This is the most important part of a UI project's README!)*

![Screenshot of the Contract Generator Dashboard](./path/to/your/screenshot.png)

---

## ✨ Key Features:

-   **Programmatic PDF Generation**: Utilizes **jsPDF** to construct contracts from scratch, offering precise control over layout, fonts, and page breaks.
-   **Data-Driven Content**: Contract clauses, lists, and sections are managed in structured JavaScript objects, making updates simple and safe.
-   **Markdown Support**: Write contract text with **bold** and *italic* formatting using simple Markdown syntax.
-   **Responsive & Mobile-Friendly UI**: A clean, modern interface built with Bootstrap 5, featuring a responsive sidebar for a seamless experience on any device.
-   **Improved User Experience**: Features include a live PDF preview in a fullscreen modal, loading indicators, and a confirmation step for resetting the form.
-   **Multi-Company Support**: Easily configurable for different company letterheads and addresses.
-   **Client-Side Operation**: Runs entirely in the browser with no backend required.

---

## 🛠️ Technology Stack:

-   **Frontend**: HTML5, CSS3, JavaScript (ES6)
-   **UI Framework**: [Bootstrap 5](https://getbootstrap.com/)
-   **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF)
-   **Content Formatting**: [markdown-it](https://github.com/markdown-it/markdown-it)

---

## 🗂️ Project Structure:

The project is organized with a clear separation of concerns.
/
├── contracts.html              # Main HTML file for the dashboard
├── css/
│   └── contracts.css           # Custom CSS styles
├── js/
│   └── contracts.js            # Core application logic and PDF generation
├── assets/
│   ├── images/                 # Logos and favicons
│   └── fonts/                  # Custom fonts for PDF generation
└── README.md                   # Project documentation
---

## 🚀 Getting Started:

To get a local copy up and running, follow these steps.

### Prerequisites:

-   A modern web browser (e.g., Google Chrome, Firefox).
-   A local web server to handle font loading correctly (e.g., VS Code's "Live Server" extension).

### Installation:

1.  **Clone the repository**
    ```sh
    git clone https://your-repository-url/document-generator.git
    ```
2.  **Navigate to the project directory**
    ```sh
    cd document-generator
    ```
3.  **Launch `contracts.html`**
    Open the `contracts.html` file using a local server to ensure the custom PDF fonts are loaded correctly.

---

## 🔧 Customization:

The data-driven architecture makes customization straightforward. All content and company data are managed in the `js/contracts.js` file.

#### 1. Adding a New Company

1.  **Open `contracts.html`**: Add a new `<option>` tag to the "Company" dropdown.
    ```html
    <select class="form-select" id="company" required>
        <option value="new-company-key">New Company Name</option>
    </select>
    ```
2.  **Open `js/contracts.js`**: Update the `companyNameMap` and `companyAddressMap` with the new company's details.
    ```javascript
    const companyNameMap = {
        // ...
        "new-company-key": "NEW COMPANY FULL NAME INC.",
    };

    const companyAddressMap = {
        // ...
        "new-company-key": "123 New Street, New City, 12345",
    };
    ```

#### 2. Modifying Contract Text

Instead of editing a large block of HTML, you can now safely edit the contract content within the `generateContractData` function in `js/contracts.js`.

-   To change a paragraph, edit the `content` property of the corresponding section.
-   Use Markdown for formatting: `**This will be bold**`.
-   To change the list items under "Duties and Responsibilities", simply edit the `list` array.

**Example:**
```javascript
// Inside generateContractData() function in js/contracts.js
const sections = [
    {
      title: "Probationary Period",
      content: `Your new text for the probationary period goes here. You can use **markdown** for bolding.`,
      useMarkdown: true,
    },
    // ... more sections
];

📄 License:
This project is under the company of Regcris, Tmarks and Prestige.

👨🏻‍💻 Developers:
[Aron D. Rodriguez](https://www.facebook.com/aronrodriguez01101)
[John Renzo G. Dacer](https://www.facebook.com/huaxxxxiii)
[Courtney Love Damasco](https://www.facebook.com/courtney.damasco)
