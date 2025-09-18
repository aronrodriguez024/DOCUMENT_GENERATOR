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

    // Contract content
    const contractText = `
      <p>Your probationary employment shall be for a period of not more than six (6) months from <strong>${startDate}</strong> to <strong>January 05, 2026</strong>.</p>
      <p>Your salary shall be <strong>₱${salary}</strong> per day, payable bi-monthly. This amount may be adjusted following applicable wage orders. You will also receive all standard legal benefits as mandated by Philippine labor laws and others.</p>
      
      <h3>Work Assignment and Location</h3>
      <p>Your initial work assignment will be at <strong>PC RIZAL, F. E. HUMANA</strong>. However, the company reserves the right to reassign you to other locations as needed, or as requested by the client. You may also be required to travel between locations depending on operational requirements.</p>
      
      <h3>Duties and Responsibilities</h3>
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

      <h3>Liability for Loss or Damage</h3>
      <p>Any loss or damage to the company, client, or store’s goods, products, or equipment resulting from your negligence, misconduct, or fraud shall be your responsibility and will be charged to your account.</p>

      <h3>Training Sponsorships</h3>
      <p>You will refund to the company all expenses paid for your training if you resign or are terminated for cause within one (1) year from the date of training. Such refund shall be immediately paid or deducted from whatever receivable or claims you may have.</p>

      <h3>Personal Expenses</h3>
      <p>The company shall not be responsible for any expenses you may incur in the execution of your duties unless the management, before the incurrence of such expenses, duly authorizes the same.</p>

      <h3>Leave of Absence and Resignation</h3>
      <p>You are required to render and notify the management through formal notice at least 30 days before the date of resignation, failure to do so will cause nominal charges. The same advance notice also applies for a planned leave of absence by notifying your immediate superior at least 3 days before.</p>

      <h3>Termination of Employment</h3>
      <p>Your employment may be terminated at any time for cause, following due process, in accordance with the procedure set by the Labor Code of the Philippines.</p>

      <h3>Return of Company Property</h3>
      <p>All company records, documents, and property in your possession must be returned or surrendered upon request upon resignation and/or termination of employment. Failure to do so may result in the corresponding value being deducted from your salary, final pay, or other receivables.</p>

      <h3>We welcome you into our organization and trust that your association with us will be mutually beneficial!</h3>

      <h3>Signed by:</h3>
      <div style="margin-top: 40px;">
        <p><strong>Fernando B. Panganiban</strong><br>HR & Admin Manager</p>
        <p>_________________________</p>
        <p><em>Signature of HR Manager</em></p>
      </div>

      <h3>ACKNOWLEDGEMENT, CONSENT, AND UNDERTAKING</h3>
      <p>I hereby certify that I have read and fully understood the foregoing terms and conditions of this Employment Contract and Appointment Letter. I further acknowledge that these were personally explained and discussed with me, and I voluntarily agree to and accept the same in full.</p>
      <p>I hereby give my consent to the Company to gather, inquire, validate, process, share, and disclose my personal and/or job-related information provided in my application and other supporting documents for legitimate administrative purposes. These may include, but are not limited to: Employment verification, certifications, payroll, and benefits processing, performance audit or evaluation, disciplinary proceedings, promotions, demotions, transfers, and compliance with government-mandated reports.</p>
      <p>I likewise agree and authorize the Company to send notices, memoranda, and other official or job-related correspondence through the email address I have provided, or through any applicable online communication platform accessible to me.</p>
      <p>Further, I authorize the Company to deduct from my salary the corresponding contribution to the Company's Group Accident Insurance.</p>
      <p>I assure the management of my loyalty, respect for my superiors, and commitment to perform my duties and responsibilities with diligence and dedication to the best of my ability.</p>
      <p>I acknowledge that dishonesty, falsification, or misrepresentation of information I have provided in my application or related documents shall constitute sufficient grounds for termination of my employment.</p>

      <h3>KEY PERFORMANCE FACTORS AND EXPECTATION PARAMETERS</h3>
      <p>These parameters are used as a guide in fulfilling job duties:</p>

      <h4>ATTENDANCE (30%)</h4>
      <ul>
        <li>Regularly attends work and arrives on time.</li>
        <li>Informs ahead if absent.</li>
        <li>Completes tasks even when planning to be absent.</li>
      </ul>

      <h4>REPORTS (15%)</h4>
      <ul>
        <li>Submits required reports on time (OSA, Inventory, price survey, etc.).</li>
        <li>Provides accurate reports to the supervisor or coordinator.</li>
        <li>Reports out-of-stock items to the supervisor.</li>
        <li>Submits DTR on the designated day.</li>
      </ul>

      <h4>PLANOGRAM AND MERCHANDISING MATERIALS (15%)</h4>
      <ul>
        <li>Effectively highlights new products according to the given merchandising guide and planograms.</li>
        <li>Provides feedback if the planogram or share of shelf is followed.</li>
        <li>Knows the layout of the store and where products are located.</li>
        <li>Installs merchandising materials correctly and neatly.</li>
      </ul>

      <h4>MERCHANDISING (15%)</h4>
      <ul>
        <li>Ensures all brands, variants, and pack sizes are displayed.</li>
        <li>Ensures products have correct and up-to-date pricing.</li>
        <li>Follows FIFO and FEFO for all products.</li>
        <li>Maintains cleanliness of products and their storage areas.</li>
      </ul>

      <h4>RETURNS (10%)</h4>
      <ul>
        <li>Tracks the number of returns in the store.</li>
        <li>Reports near-expiry items by the deadline.</li>
      </ul>

      <h4>FEEDBACK (10%)</h4>
      <ul>
        <li>Actively participates in group chats, providing quick responses and feedback.</li>
        <li>Follows instructions consistently and completes tasks given by superiors.</li>
      </ul>

      <h4>PERSONALITY (5%)</h4>
      <ul>
        <li>Wears clean, proper attire or uniform with ID.</li>
        <li>Maintains a presentable and professional appearance, including regular grooming (e.g., haircut, shaving, neat hairstyle).</li>
        <li>Shows care for the company and respects superiors and clients.</li>
      </ul>
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
        html2canvas:  { scale: 2, logging: true, useCORS: true },  // Added logging for debugging and CORS support
        jsPDF:        { unit: 'in', format: 'legal', orientation: 'portrait' } // Ensure proper page fitting
    };

    // Call the html2pdf function with adjusted settings
    html2pdf().set(opt).from(element).save();
});

// Prevent form submission and show contract preview instead
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('previewBtn').click();
});
