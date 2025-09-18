document.getElementById('previewBtn').addEventListener('click', function() {
    // Collect form data
    const companyNameMap = {
        'trade-marketing': 'TRADE MARKETING SOLUTIONS INC.',
        'regcris': 'REGCRIS MARKETING NETWORK',
        'prestige': 'PRESTIGE PROMOTIONS'
    };

    const companyAddressMap = {
        'trade-marketing': 'Room 306 3F CLMC Building, 259 EDSA, Barangay Wack-Wack Greenshills East, Mandaluyong City',
        'regcris': '2768 Faraday, Makati City, 1234 Metro Manila',
        'prestige': '3F Lupin Building, 2768 Faraday Street, Barangay San Isdro, Makati City'
    };

    const companyKey = document.getElementById('company').value;
    const companyName = companyNameMap[companyKey];
    const companyAddress = companyAddressMap[companyKey];
    const employmentType = document.getElementById('employment-type').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const title = document.getElementById('title').value; // sir or maam
    const position = document.getElementById('position').value;
    const startDate = new Date(document.getElementById('start-date').value);
    const client = document.getElementById('client').value;
    const workLocation = document.getElementById('work-location').value;
    const employeeId = document.getElementById('employee-id').value;
    const salary = parseFloat(document.getElementById('salary').value).toFixed(2);

    // Format start date (e.g., September 18, 2025)
    const formattedStartDate = startDate.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    });
    
    // Calculate end date (6 months - 1 day)
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 6);
    endDate.setDate(endDate.getDate() - 1);
    const formattedEndDate = endDate.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    });

    // Format phone number to match PDF sample (e.g., 0999.502.6333)
    const formattedPhone = `0${phone.substring(0,3)}.${phone.substring(3,6)}.${phone.substring(6,10)}`;

    // This style block is injected into the preview to match the PDF's formatting
    const styles = `
        <style>
            body {
                font-family: serif;
                font-size: 11pt;
                line-height: 1.2;
                color: black;
            }
            .contract-container {
                /* padding: 0.5in; */ /* <-- Removed to reduce excess space */
            }
            .company-header {
                text-align: center;
                /* font-weight: bold; */ /* <-- Removed to un-bold the address */
                margin-bottom: 10px;
            }
            .contract-title {
                text-align: center;
                font-weight: bold;
                margin-top: 10px;
                margin-bottom: 15px;
                text-decoration: underline;
            }
            .employee-info p {
                margin: 2px 0;
            }
            .section-heading {
                font-weight: bold;
                text-decoration: underline;
                margin-top: 1.2em;
                margin-bottom: 0.5em;
            }
            .justified {
                text-align: justify;
            }
            .page-break {
                page-break-before: always;
            }
            .signature-block {
                margin-top: 50px;
            }
            .acknowledgement-heading {
                 text-align: center;
                 font-weight: bold;
                 margin-top: 30px;
                 margin-bottom: 20px;
            }
            .annex-title {
                text-align: center;
                font-weight: bold;
                margin-top: 20px;
            }
            .annex-subtitle {
                text-align: center;
                font-style: italic;
                margin-bottom: 20px;
            }
            .kpi-heading {
                font-weight: bold;
                margin-top: 15px;
            }
            
            /* --- FIX FOR PAGE BREAKS --- */
            .section-block {
                page-break-inside: avoid;
            }
            li {
                 page-break-inside: avoid;
            }
            /* --- END FIX --- */
        </style>
    `;

    // Generate contract preview HTML, structured to match the PDF sample
    const previewHtml = `
        ${styles}
        <div class="contract-container">
            <div class="company-header">
                <p style="font-weight: bold;">${companyName}</p>
                <p>${companyAddress}</p>
            </div>

            <div class="contract-title">
                <p>${employmentType.toUpperCase()} EMPLOYMENT CONTRACT</p>
            </div>

            <div class="employee-info">
                <p><strong>${name.toUpperCase()}</strong></p>
                <p>${address}</p>
                <p>${email}</p>
                <p>${formattedPhone}</p>
            </div>
            
            <p style="margin-top: 20px;">${title === 'sir' ? 'Sir' : "Ma'am"};</p>

            <p class="justified">We are pleased to inform you that you are being hired as probationary <strong><u>${position.toUpperCase()}</u></strong> effective <strong><u>${formattedStartDate}</u></strong> subject to the following terms and conditions, you will be assigned to one of our client the <strong><u>${client.toUpperCase()}</u></strong> and your Employee I.D. Number is <strong><u>${employeeId.toUpperCase()}</u></strong>,</p>

            <div class="section-block">
                <p class="section-heading">Probationary Period</p>
                <p class="justified">Your probationary employment shall be for a period of not more than six (6) months from <strong>${formattedStartDate}</strong> to <strong>${formattedEndDate}</strong>. Your continued employment after the probation period will depend on your performance and your ability to meet the company's reasonable standards. Your performance will be regularly evaluated based on the Key Performance Factos and Expectation outlined in Annex "A" of this contract.</p>
            </div>

            <div class="section-block">
                <p class="section-heading">Compensation and Benefits</p>
                <p class="justified">Your salary shall be <strong>${salary}</strong> per day, payable bi-monthly. This amount may be adjusted following applicable wage orders. You will also received all standard legal benefits as mandated by Philippine labor laws and other social legislation.</p>
            </div>

            <div class="section-block">
                <p class="section-heading">Work Assignment and Location</p>
                <p class="justified">Your initial work assignment will be at <strong><u>${workLocation}</u></strong>. However, the company reserves the right to reassign you to other locations as needed, or as requested by the client. You may also be required to travel between locations depending on operational requirements.</p>
            </div>

            <div class="section-block">
                <p class="section-heading">Duties and Responsibilities</p>
                <p class="justified">Your primary task shall include, but are not limited to, the following:</p>
                <ol>
                    <li>Arrange, and replenish products on shelves, and off-shelf displays (OSDs) following company standards.</li>
                    <li>Maintain clean, organized, and well-stocked product displays at all times.</li>
                    <li>Ensure accurate pricing and correct product tags are in place.</li>
                    <li>Monitor product inventory and report stock levels of:
                        <ul style="list-style-type: lower-alpha;">
                            <li>fast and slow-movings items</li>
                            <li>near-expiry products</li>
                            <li>Bad Order (В.О.)</li>
                        </ul>
                    </li>
                    <li>Remove expired, damaged, or defective items promptly and report them for pull-out.</li>
                    <li>Coordinate with store personnel and client to ensure display compliance and shelf space maintenance.</li>
                    <li>Record and submit daily or weekly inventory and accomplishment reports.</li>
                    <li>Comply with all company and store policies, including proper grroming, attendance, and conduct.</li>
                    <li>Perform other merchandising-related tasks as my be assigned from time to time.</li>
                </ol>
            </div>

            <div class="section-block">
                <p class="section-heading">Reporting Line</p>
                <p class="justified">You shall report directly to the company's designated coordinators, supervisors or officers. All work instructions and guidance shall come from them. They will orient you on your work schedule, attendance monitoring, performance evaluation, compliance, and other job-related matters.</p>
            </div>

            <div class="section-block">
                <p class="section-heading">Company Policies</p>
                <p class="justified">You are expected to stricly comply with all existing and future company rules and policies, including but not limited to those regarding discipline, work ethics, honesty, safety operating procedures, use of company property, and confidentiality.</p>
            </div>
            
            <div class="section-block">
                <p class="section-heading">Liability for Loss or Damages</p>
                <p class="justified">Any loss or damage to the company, client or store's goods, products, or equipment resulting from your negligence, misconduct, or fraud shall be your responsibilty and will be charged to your account.</p>
            </div>

            <div class="section-block">
                <p class="section-heading">Trainings Sponsorships</p>
                <p class="justified">You will refund to the company all expenses paid for your trainings if your resign or terminated for cause within one (1) year from the date of training. Such refund shall be immediately paid or deducted from whatever receivable or claims you may have.</p>
            </div>
          <br>
            <div class="section-block">
                <p class="section-heading">Personal Expenses</p>
                <p class="justified">The company shall not be responsible for any expenses you may incure in the execution of your duties unless the management before the incurrence of such expense, duly authorize the same.</p>
            </div>

            <div class="section-block">
                <p class="section-heading">Leave of Absence and Resignation</p>
                <p class="justified">You are required to render and notify the management through formal notice at least 30 days before the intended date, failure to do so will cause nominal charges. The same advance notice also applies for a planned leave of absence by notifying your immediate superior at least 3 days before.</p>
            </div>

            <div class="section-block">
                <p class="section-heading">Termination of Employment</p>
                <p class="justified">Your employment may be terminated at any time for cause, following due process, in accordance to the procedure set by the Labor Code of the Philippines.</p>
            </div>
            
            <div class="section-block">
                <p class="section-heading">Return of Company Property</p>
                <p class="justified">All company records, documents, and property in your possession must be returned or surrender upon request or resignation and/or termination of employment. Failure to do so may result in corresponding value being deducted from your salary, final pay or other receivables.</p>
            </div>

            <p style="margin-top: 30px;">We welcome you into our organization and trust that your association with us will be mutually beneficial!</p>

            <div class="signature-block">
                <p><strong>FERNANDO B. PANGANIBAN</strong><br>HR & Admin Manager</p>
            </div>

            <div class="acknowledgement-heading">
                <p>ACKNOWLEDGEMENT, CONSENT AND UNDERTAKING</p>
            </div>
            <p class="justified">I hereby certify that I have read and fully understood the foregoing terms and conditions of this Employment Contract and Appointment Letter. I further acknowledge that these were personally explained and discussed with me, and I voluntarily agree to and accept the same in full.</p>
            <p class="justified">I hereby give my consent to the Company to gather, inquire, validate, process, share, and disclose my personal and/or job-related information provided in my application and other supporting documents for legitimate adminsitrative purposes. These my include, but are not limited to: Employment verification, certifications, payroll, and benefits processing, performance audit or evaluation, disciplinary proceedings, promotions, demotions, transfers, and compliance with government-mandated reports.</p>
            <p class="justified">I likewise agree and authorize the Company to send notices, memoranda, and other official or job-related correspondence through the email address I have provided, or through any applicable online communication platform accessible to me.</p>
            <p class="justified">Further, I authorize the Company to deduct from my salary the corresponding contribution to the Company's Group Accident Insurance.</p>
            <p class="justified">I assure the management of my loyalty, respect for my superiors, and commitment to perform my duties and responsibilities with diligence and dedication to the best of my ability.</p>
            <p class="justified">Finally, I acknowledge that dishonesty, falsification, or misrepresentation of information I have provided in my application or related documents shall constitute sufficient ground for termination of my employment.</p>
            <p style="margin-top: 30px; font-weight: bold;">${name.toUpperCase()}</p>

            <div class="page-break"></div>

            <div class="annex-title"><p>ANNEX "A"</p></div>
            <div class="annex-title"><p>KEY PERFORMANCE FACTORS AND EXPECTATION PARAMETERS</p></div>
            <div class="annex-subtitle"><p>(Upang magsilbing gabay sa pagtupad ng tungkulin)</p></div>
            
            <div class="section-block">
                <p class="kpi-heading">ATTENDANCE (30%)</p>
                <ul>
                    <li>Regular na pumapasok at nasa tamang oras.</li>
                    <li>Nagpapaalam ng mas maaga kung may planong umabsent. Tinatapos ang lahat ng gawain lalo na kung nagbabalak umabsent.</li>
                </ul>
            </div>

            <div class="section-block">
                <p class="kpi-heading">REPORTS (15%)</p>
                <ul>
                    <li>Nagsusubmit ng mga required na report sa takdang panahon (OSA, Inventory. price survey, SOS, etc).</li>
                    <li>Nagbibigay ng tamang report (accurate) sa supervisor o coordinator.</li>
                    <li>Sinisiguro na naipa-alam sa supervisor or coordinator ang mga out of stock na item sa tindahan.</li>
                    <li>Nagpadadala ng DTR sa takdang araw.</li>
                </ul>
            </div>
            
            <div class="section-block">
                <p class="kpi-heading">PLANOGRAM AND MERCHANDISING MATERIALS (15%)</p>
                <ul>
                    <li>Epektibo at consistent na naha-highlight ang mga New Products Initiatives ayon sa ibinibigay na Merchandising Guide at Planograms.</li>
                    <li>Nakapagbibigay ng tamang feedback kung ang pinagkasunduang PLANOGRAM O SHARE OF SHELF ay nasusunod o hindi.</li>
                    <li>Kabisado ng buong layout ng store at kung nasaan ang produkto sa tindahan.</li>
                    <li>Na-install ng tama, maayos at maganda ang mga merchandising materials.</li>
                </ul>
            </div>

            <div class="section-block">
                <p class="kpi-heading">MERCHANDISING (15%)</p>
                <ul>
                    <li>Tinitiyak na nakadisplay ang lahat ng brands, variants, pack sizes na available sa tindahan.</li>
                    <li>Sinisiguro na lahat ng produkto ay may tama at napapanahong presyo.</li>
                    <li>Pinapanatili at sinusunod ang First-In, First-Out (FIFO) at First-Expiry, First-Out (FEFO) sa lahat ng produkto.</li>
                    <li>Pinapanatili ang kalinisan ng produkto at ang mga pinaglalagyan nito.</li>
                </ul>
            </div>

            <div class="section-block">
                <p class="kpi-heading">RETURNS (10%)</p>
                <ul>
                    <li>Nalalaman ang dami ng return sa hawk na tindahan at mga dahilan. Nagbibigay ng near expiry report sa tinakdang deadline.</li>
                </ul>
            </div>

            <div class="section-block">
                <p class="kpi-heading">FEEDBACK (10%)</p>
                <ul>
                    <li>Aktibo sa lahat ng Group Chat (GC), mabilis sumagot at nagbibigay ng feedback.</li>
                    <li>Sumusunod sa instructions at consistent na nagagawa ang lahat ng task na ibinigay ng mga nakakataas sa kanya.</li>
                </ul>
            </div>

            <div class="section-block">
                <p class="kpi-heading">PERSONALITY (5%)</p>
                <ul>
                    <li>Pagsusuot ng malinis at maayos na itinakdang kasuotan o uniforme pati na ang pagsusuot parati ng I.D.</li>
                    <li>Palaging ginagawang presentable, malinis at kaaya-ayang hitsura tulad ng regular na pagpapa-gupit ng buhok at pag-aahit ng balbas at bigote kung lalake at kung babae naman ay palaging nakapusod o maayos na buhok at pananamit.</li>
                    <li>May malasakit sa kompanya at paggalang sa mga nakakataas o mga opisyales ng kompanya, tindahan at kliyente.</li>
                </ul>
            </div>
        </div>
    `;

    document.getElementById('contractPreviewBody').innerHTML = previewHtml;

    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('contractPreviewModal'));
    modal.show();
});

document.getElementById('downloadPdfBtn').addEventListener('click', function() {
    const element = document.getElementById('contractPreviewBody');
    const name = document.getElementById('name').value;
    const fileName = `${name.replace(/\s/g, '_')}_Employment_Contract.pdf`;
    
    const opt = {
        margin:       0.5,
        filename:     fileName,
        image:        { type: 'pdf', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'in', format:'legal', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('previewBtn').click();
});