document.getElementById('previewBtn').addEventListener('click', function() {
    // Collect form data
    const company = document.getElementById('company').value;
    const employmentType = document.getElementById('employment-type').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const title = document.getElementById('title').value;
    const position = document.getElementById('position').value;
    const startDate = document.getElementById('start-date').value;
    const client = document.getElementById('client').value;
    const employeeId = document.getElementById('employee-id').value;
    const salary = document.getElementById('salary').value;

    // Format phone number with +63
    const formattedPhone = '+63' + phone;

    // Directly embed the non-form content (e.g., company policies) here
    const contractText = `
      <p>Your probationary employment shall be for a period of not more than six (6) months from <strong>${startDate}</strong> to <strong>January 05, 2026</strong>.</p>
      <p>Your salary shall be <strong>₱${salary}</strong> per day, payable bi-monthly. This amount may be adjusted following applicable wage orders. You will also receive all standard legal benefits as mandated by Philippine labor laws and others.</p>
      
      <h3>Work Assignment and Location</h3>
      <p>Your initial work assignment will be at <strong>PC RIZAL, F. E. HUMANA</strong>. However, the company reserves the right to reassign you to other locations as needed, or as requested by the client. You may also be required to travel between locations depending on operational requirements.</p>
      
      <h3>Duties and Responsibilities</h3>
      <p>Your primary tasks shall include, but are not limited to, the following:</p>
      <ul>
        <li>Arrange and replenish products on shelves, and off-shelf displays (OSDs) following company standards.</li>
        <li>Maintain clean, organized, and well-stocked product displays at all times.</li>
        <li>Ensure accurate pricing and correct product tags are in place.</li>
        <li>Monitor product inventory and report stock levels of:
          <ul>
            <li>Fast and slow-moving products</li>
            <li>Near-expiry products</li>
          </ul>
        </li>
        <li>Remove expired, damaged, or defective items promptly and report them for pull-out.</li>
        <li>Coordinate with store personnel and client to ensure display compliance and shelf space maintenance.</li>
        <li>Record and submit weekly or monthly inventory and accomplishment reports.</li>
        <li>Comply with all company and store policies, including proper grooming, attendance, and conduct.</li>
        <li>Perform other merchandising-related tasks as assigned from time to time.</li>
      </ul>

      <h3>Reporting Line</h3>
      <p>You shall report directly to the company’s designated coordinators, supervisors, or officers. All work instructions and guidance shall come from them. They will orient you on your work schedule, attendance monitoring, performance evaluation, compliance, and other job-related matters.</p>
      
      <h3>Company Policies</h3>
      <p>You are expected to strictly comply with all existing and future company rules and policies, including but not limited to those regarding discipline, work ethics, honesty, safety operating procedures, use of company property, and confidentiality.</p>
    `;

    // Generate contract preview HTML
    const previewHtml = `
      <h2>${company} - ${employmentType.toUpperCase()} EMPLOYMENT CONTRACT</h2>
      <p><strong>${name}</strong> (${title})<br>
      ${address}<br>
      ${email}<br>
      ${formattedPhone}</p>
      <p>Position: <strong>${position}</strong></p>
      <p>Start Date: <strong>${startDate}</strong></p>
      <p>Client: <strong>${client}</strong></p>
      <p>Employee ID: <strong>${employeeId}</strong></p>
      <p>Salary: <strong>${salary}</strong></p>
      <hr>
      ${contractText}
    `;

    document.getElementById('contractPreviewBody').innerHTML = previewHtml;

    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('contractPreviewModal'));
    modal.show();
});

document.getElementById('downloadPdfBtn').addEventListener('click', function() {
    const element = document.getElementById('contractPreviewBody');
    
    // Adjusting options for better page fitting and resolving the cutoff issue
    const opt = {
        margin:       1,  // Increased margin to prevent cutoff
        filename:     'employment_contract.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, logging: true },  // Added logging for debugging
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Call the html2pdf function with adjusted settings
    html2pdf().set(opt).from(element).save();
});

// Prevent form submission and show contract preview instead
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('previewBtn').click();
});
