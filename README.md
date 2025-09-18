# Document Generator

A simple and efficient web-based dashboard for generating standardized employee contracts for Regcris, Tmarks, and Prestige.

This tool is built with HTML, Bootstrap 5, and JavaScript to provide a fast, client-side solution for HR and administrative tasks, allowing users to fill in employee details and instantly generate a formatted, downloadable PDF contract.

## ✨ Key Features

* **Dynamic Contract Generation**: Automatically populates employee data into a pre-defined contract template.
* **PDF Export**: Generates and downloads contracts in PDF format using html2pdf.js.
* **Multi-Company Support**: Easily switch between different company letterheads (Regcris, Tmarks, Prestige).
* **Responsive UI**: A clean, responsive dashboard built with Bootstrap 5 that works on any device.
* **Client-Side Operation**: Runs entirely in the browser. No backend or server setup is required.
* **Form Validation**: Ensures required fields are filled before generation.

## 🛠️ Technology Stack

* **Frontend**: HTML5, CSS3, JavaScript (ES6)
* **Frameworks/Libraries**:
    * [Bootstrap 5](https://getbootstrap.com/): For layout and styling.
    * [html2pdf.js](https://github.com/eKoopmans/html2pdf.js/): For client-side PDF generation.

## 🗂️ Project Structure

The project structure is simple and organized, with all core logic contained in the root directory.

DOCUMENT_GENERATOR/
│
├── dashboard.html              # The main HTML file for the dashboard
├── dashboard.css               # Custom CSS styles for the application
├── dashboard.js                # Core JavaScript for form handling and contract generation
├── README.md                   # Project documentation
└── assets/
└── images/
└── favicon_regcris.png   # Application favicon

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* A modern web browser (e.g., Google Chrome, Firefox, Microsoft Edge).

### Installation

1.  **Clone the repository**
    ```sh
    git clone https://your-repository-url/DOCUMENT_GENERATOR.git
    ```
2.  **Navigate to the project directory**
    ```sh
    cd DOCUMENT_GENERATOR
    ```
3.  **Open the dashboard**
    Simply open the `dashboard.html` file in your web browser.

## 📋 How to Use

1.  **Open `dashboard.html`** in your browser.
2.  **Fill out the Employee Contract Form** with all the required employee details.
3.  Click the **Preview Contract** button to see a live preview of the generated contract in a pop-up modal.
4.  Review the details in the preview.
5.  Click the **Download PDF** button within the modal to save the contract to your computer.
6.  Use the **Reset Form** button to clear all fields and start over.

## 🔧 Customization

This tool was built to be easily customized.

#### 1. Adding a New Company

1.  **Open `dashboard.html`**: Navigate to the "Company" `<select>` element and add a new `<option>` with a unique `value`.
    ```html
    <select class="form-select" id="company" required>
        <option value="new-company-key">NEW COMPANY NAME</option>
    </select>
    ```
2.  **Open `dashboard.js`**: Update the `companyNameMap` and `companyAddressMap` objects with the matching key, name, and address.
    ```javascript
    const companyNameMap = {
        // ... existing companies ...
        'new-company-key': 'NEW COMPANY FULL NAME INC.'
    };

    const companyAddressMap = {
        // ... existing addresses ...
        'new-company-key': '123 New Street, New City, 12345'
    };
    ```

#### 2. Modifying Contract Text

All contract clauses and text are located inside the `previewHtml` template literal within `dashboard.js`. You can directly edit the text and HTML structure in this variable to change any part of the contract.

#### 3. Changing Styles

All custom styles can be modified in the `dashboard.css` file.

## 📄 License

This project is under the company of Regcris, Tmarks and Prestige.

### 👨🏻‍💻 Developers
The developer for this project is @Aaron Rodriguez, @John Renzo G. Dacer, @Courtney Love Damasco.