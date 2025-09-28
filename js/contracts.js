// Shared function to collect form data
function collectFormData() {
  const companyNameMap = {
    "trade-marketing": "TRADE MARKETING SOLUTIONS INC.",
    regcris: "REGCRIS MARKETING NETWORK",
    prestige: "PRESTIGE PROMOTIONS INC.",
  };

  const companyAddressMap = {
    "trade-marketing":
      "Room 306 3F CLMC Building, 259 EDSA, Barangay Wack-Wack Greenshills East, Mandaluyong City",
    regcris: "2768 Faraday, Makati City, 1234 Metro Manila",
    prestige:
      "3F Lupin Building, 2768 Faraday Street, Barangay San Isdro, Makati City",
  };

  const companyKey = document.getElementById("company").value;
  const companyName = companyNameMap[companyKey];
  const companyAddress = companyAddressMap[companyKey];
  const employmentTypeSelect = document.getElementById("employment-type");
  const employmentType = employmentTypeSelect.options[employmentTypeSelect.selectedIndex].text;
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const title = document.querySelector('input[name="title"]:checked')?.value || "";
  const position = document.getElementById("position").value;
  const startDate = new Date(document.getElementById("start-date").value);
  const client = document.getElementById("client").value;
  const employeeId = document.getElementById("employee-id").value;
  const salary = parseFloat(document.getElementById("salary").value).toFixed(2);

  // Format start date
  const formattedStartDate = startDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  // Calculate end date (6 months - 1 day)
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + 6);
  endDate.setDate(endDate.getDate() - 1);
  const formattedEndDate = endDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  // Format phone number
  const formattedPhone = `0${phone.substring(0, 3)}.${phone.substring(
    3,
    6
  )}.${phone.substring(6, 10)}`;

  return {
    companyName,
    companyAddress,
    employmentType,
    name,
    address,
    email,
    phone,
    formattedPhone,
    title,
    position,
    startDate,
    formattedStartDate,
    formattedEndDate,
    client,
    employeeId,
    salary,
  };
}

// Shared function to generate contract sections data
function generateContractData(formData) {
  const sections = [
    {
      title: "Probationary Period",
      content: `Your probationary employment shall be for a period of not more than six (6) months from **${formData.formattedStartDate}** to **${formData.formattedEndDate}.** Your continued employment after the probation period will depend on your performance and your ability to meet the company's reasonable standards. Your performance will be regularly evaluated based on the Key Performance Factors and Expectations outlined in Annex "A" of this contract.`,
      useMarkdown: true,
    },
    {
      title: "Compensation and Benefits",
      content: `Your salary shall be **P${formData.salary}** per day, payable bi-monthly. This amount may be adjusted following applicable wage orders. You will also receive all standard legal benefits as mandated by Philippine labor laws and other social legislation.`,
      useMarkdown: true,
    },
    {
      title: "Work Assignment and Location",
      content: `Your initial work assignment will be at ________________________________. However, the company reserves the right to reassign you to other locations as needed, or as requested by the client. You may also be required to travel between locations depending on operational requirements.`,
      useMarkdown: false,
    },
    {
      title: "Duties and Responsibilities",
      content: "Your primary task shall include, but are not limited to, the following:",
      list: [
        "Arrange, and replenish products on shelves, and off-shelf displays (OSDs) following company standards.",
        "Maintain clean, organized, and well-stocked product displays at all times.",
        "Ensure accurate pricing and correct product tags are in place.",
        "Monitor product inventory and report stock levels of:",
        "Remove expired, damaged, or defective items promptly and report them for pull-out.",
        "Coordinate with store personnel and client to ensure display compliance and shelf space maintenance.",
        "Record and submit daily or weekly inventory and accomplishment reports.",
        "Comply with all company and store policies, including proper grooming, attendance, and conduct.",
        "Perform other merchandising-related tasks as may be assigned from time to time.",
      ],
      subList: {
        3: [
          "fast and slow-movings items",
          "near-expiry products",
          "Bad Order (B.O.)",
        ],
      },
      useMarkdown: false,
    },
    {
      title: "Reporting Line",
      content: "You shall report directly to the company's designated coordinators, supervisors or officers. All work instructions and guidance shall come from them. They will orient you on your work schedule, attendance monitoring, performance evaluation, compliance, and other job-related matters.",
      useMarkdown: false,
    },
    {
      title: "Company Policies",
      content: "You are expected to strictly comply with all existing and future company rules and policies, including but not limited to those regarding discipline, work ethics, honesty, safety operating procedures, use of company property, and confidentiality.",
      useMarkdown: true,
    },
    {
      title: "Liability for Loss or Damages",
      content: "Any loss or damage to the company, client or store's goods, products, or equipment resulting from your negligence, misconduct, or fraud shall be your responsibility and will be charged to your account.",
      useMarkdown: true,
    },
    {
      title: "Trainings Sponsorships",
      content: "You will refund to the company all expenses paid for your trainings if you resign or terminated for cause within one (1) year from the date of training. Such refund shall be immediately paid or deducted from whatever receivable or claims you may have.",
      useMarkdown: true,
    },
    {
      title: "Personal Expenses",
      content: "The company shall not be responsible for any expenses you may incur in the execution of your duties unless the management before the incurrence of such expense, duly authorize the same.",
      useMarkdown: true,
    },
    {
      title: "Leave of Absence and Resignation",
      content: "You are required to render and notify the management through formal notice at least 30 days before the intended date, failure to do so will cause nominal charges. The same advance notice also applies for a planned leave of absence by notifying your immediate superior at least 3 days before.",
      useMarkdown: true,
    },
    {
      title: "Termination of Employment",
      content: "Your employment may be terminated at any time for cause, following due process, in accordance to the procedure set by the Labor Code of the Philippines.",
      useMarkdown: true,
    },
    {
      title: "Return of Company Property",
      content: "All company records, documents, and property in your possession must be returned or surrender upon request or resignation and/or termination of employment. Failure to do so may result in corresponding value being deducted from your salary, final pay or other receivables.",
      useMarkdown: true,
    },
  ];

  const acknowledgements = [
    "I hereby certify that I have read and fully understood the foregoing terms and conditions of this Employment Contract and Appointment Letter. I further acknowledge that these were personally explained and discussed with me, and I voluntarily agree to and accept the same in full.",
    "I hereby give my consent to the Company to gather, inquire, validate, process, share, and disclose my personal and/or job-related information provided in my application and other supporting documents for legitimate administrative purposes. These may include, but are not limited to: Employment verification, certifications, payroll, and benefits processing, performance audit or evaluation, disciplinary proceedings, promotions, demotions, transfers, and compliance with government-mandated reports.",
    "I likewise agree and authorize the Company to send notices, memoranda, and other official or job-related correspondence through the email address I have provided, or through any applicable online communication platform accessible to me.",
    "Further, I authorize the Company to deduct from my salary the corresponding contribution to the Company's Group Accident Insurance.",
    "I assure the management of my loyalty, respect for my superiors, and commitment to perform my duties and responsibilities with diligence and dedication to the best of my ability.",
    "Finally, I acknowledge that dishonesty, falsification, or misrepresentation of information I have provided in my application or related documents shall constitute sufficient ground for termination of my employment.",
  ];

  const kpiSections = [
    {
      title: "ATTENDANCE (30%)",
      items: [
        "Regular na pumapasok at nasa tamang oras.",
        "Nagpapaalam ng mas maaga kung may planong umabsent. Tinatapos ang lahat ng gawain lalo na kung nagbabalak umabsent.",
      ],
    },
    {
      title: "REPORTS (15%)",
      items: [
        "Nagsusubmit ng mga required na report sa takdang panahon (OSA, Inventory, price survey, SOS, etc).",
        "Nagbibigay ng tamang report (accurate) sa supervisor o coordinator.",
        "Sinisiguro na naipa-alam sa supervisor or coordinator ang mga out of stock na item sa tindahan.",
        "Nagpadala ng DTR sa takdang araw.",
      ],
    },
    {
      title: "PLANOGRAM AND MERCHANDISING MATERIALS (15%)",
      items: [
        "Epektibo at consistent na naha-highlight ang mga New Products Initiatives ayon sa ibinibigay na Merchandising Guide at Planograms.",
        "Nakapagbibigay ng tamang feedback kung ang pinagkasunduang PLANOGRAM O SHARE OF SHELF ay nasusunod o hindi.",
        "Kabisado ng buong layout ng store at kung nasaan ang produkto sa tindahan.",
        "Na-install ng tama, maayos at maganda ang mga merchandising materials.",
      ],
    },
    {
      title: "MERCHANDISING (15%)",
      items: [
        "Tinitiyak na nakadisplay ang lahat ng brands, variants, pack sizes na available sa tindahan.",
        "Sinisiguro na lahat ng produkto ay may tama at napapanahong presyo.",
        "Pinapanatili at sinusunod ang First-In, First-Out (FIFO) at First-Expiry, First-Out (FEFO) sa lahat ng produkto.",
        "Pinapanatili ang kalinisan ng produkto at ang mga pinaglalagyan nito.",
      ],
    },
    {
      title: "RETURNS (10%)",
      items: [
        "Nalalaman ang dami ng return sa hawk na tindahan at mga dahilan. Nagbibigay ng near expiry report sa tinakdang deadline.",
      ],
    },
    {
      title: "FEEDBACK (10%)",
      items: [
        "Aktibo sa lahat ng Group Chat (GC), mabilis sumagot at nagbibigay ng feedback.",
        "Sumusunod sa instructions at consistent na nagagawa ang lahat ng task na ibinigay ng mga nakakataas sa kanya.",
      ],
    },
    {
      title: "PERSONALITY (5%)",
      items: [
        "Pagsusuot ng malinis at maayos na itinakdang kasuotan o uniforme pati na ang pagsusuot parati ng I.D.",
        "Palaging ginagawang presentable, malinis at kaaya-ayang hitsura tulad ng regular na pagpapa-gupit ng buhok at pag-aahit ng balbas at bigote kung lalake at kung babae naman ay palaging nakapusod o maayos na buhok at pananamit.",
        "May malasakit sa kompanya at paggalang sa mga nakakataas o mga opisyales ng kompanya, tindahan at kliyente.",
      ],
    },
  ];

  return { sections, acknowledgements, kpiSections };
}

// Function to generate HTML preview
function generatePreviewHTML(formData, contractData) {
  const styles = `
    <style>
      body {
        font-family: 'Helvetica', sans-serif;
        font-size: 12pt;
        line-height: 1.4;
        color: black;
        margin: 0;
        padding: 20px;
      }
      .contract-container {
        width: 100%;
        max-width: 612px;
        margin: 0 auto;
        padding: 40px;
        background: white;
      }
      .company-header {
        text-align: center;
        margin-bottom: 16px;
      }
      .company-header p:first-child {
        font-size: 14pt;
        font-weight: bold;
        margin-bottom: 5px;
      }
      .contract-title {
        text-align: center;
        font-weight: bold;
        font-size: 14pt;
        margin-top: 16px;
        margin-bottom: 32px;
      }
      .employee-info p {
        margin: 16px 0;
      }
      .employee-info p:first-child {
        font-weight: bold;
      }
      .section-heading {
        font-weight: bold;
        margin-top: 24px;
        margin-bottom: 8px;
        font-size: 12pt;
      }
      .justified {
        text-align: justify;
        word-wrap: break-word;
        overflow-wrap: break-word;
        margin-bottom: 16px;
      }
      .page-break {
        page-break-before: always;
      }
      .signature-block {
        margin-top: 48px;
        text-align: right;
      }
      .acknowledgement-heading {
        text-align: center;
        font-weight: bold;
        margin-top: 48px;
        margin-bottom: 32px;
        font-size: 12pt;
      }
      .annex-title {
        text-align: right;
        font-weight: bold;
        margin-top: 20px;
        font-size: 16pt;
      }
      .annex-header {
        text-align: center;
        font-weight: bold;
        margin-top: 32px;
        margin-bottom: 24px;
        font-size: 14pt;
      }
      .annex-subtitle {
        text-align: center;
        margin-bottom: 32px;
        font-size: 12pt;
      }
      .kpi-heading {
        font-weight: bold;
        margin-top: 24px;
        margin-bottom: 8px;
        font-size: 12pt;
      }
      .section-block {
        margin-bottom: 16px;
      }
      ol {
        padding-left: 20px;
        margin: 16px 0;
      }
      ol li {
        margin-bottom: 8px;
        line-height: 1.4;
      }
      ul {
        padding-left: 20px;
        margin: 16px 0;
      }
      ul li {
        margin-bottom: 8px;
        line-height: 1.4;
        list-style-type: disc;
      }
      .nested-list {
        list-style-type: lower-alpha;
        margin-left: 20px;
      }
      .closing-statement {
        margin-top: 24px;
        margin-bottom: 48px;
      }
      .acknowledgement-text {
        margin-bottom: 24px;
      }
      .employee-signature {
        margin-top: 16px;
        font-weight: bold;
        text-align: right;
      }
      @media print {
        body { margin: 0; }
        .contract-container { 
          max-width: none; 
          margin: 0; 
          box-shadow: none;
        }
      }
    </style>
  `;

  // Generate sections HTML
  let sectionsHTML = "";
  contractData.sections.forEach((section) => {
    sectionsHTML += `
      <div class="section-block">
        <p class="section-heading">${section.title}</p>
        <p class="justified">${section.content}</p>
    `;

    if (section.list) {
      sectionsHTML += "<ol>";
      section.list.forEach((item, index) => {
        sectionsHTML += `<li>${item}`;
        if (section.subList && section.subList[index]) {
          sectionsHTML += '<ul class="nested-list">';
          section.subList[index].forEach((subItem) => {
            sectionsHTML += `<li>${subItem}</li>`;
          });
          sectionsHTML += "</ul>";
        }
        sectionsHTML += "</li>";
      });
      sectionsHTML += "</ol>";
    }

    sectionsHTML += "</div>";
  });

  // Generate acknowledgements HTML
  let acknowledgementsHTML = "";
  contractData.acknowledgements.forEach((ack) => {
    acknowledgementsHTML += `<p class="justified acknowledgement-text">${ack}</p>`;
  });

  // Generate KPI sections HTML
  let kpiHTML = "";
  contractData.kpiSections.forEach((section) => {
    kpiHTML += `
      <div class="section-block">
        <p class="kpi-heading">${section.title}</p>
        <ul>
    `;
    section.items.forEach((item) => {
      kpiHTML += `<li>${item}</li>`;
    });
    kpiHTML += "</ul></div>";
  });

  return `
    ${styles}
    <div class="contract-container">
      <div class="company-header">
        <p>${formData.companyName}</p>
        <p>${formData.companyAddress}</p>
      </div>

      <div class="contract-title">
        <p>${formData.employmentType} EMPLOYMENT CONTRACT</p>
      </div>

      <div class="employee-info">
        <p>${formData.name.toUpperCase()}</p>
        <p>${formData.address}</p>
        <p>${formData.email}</p>
        <p>${formData.formattedPhone}</p>
      </div>
      
      <p style="margin-top: 32px;">Sir/Ma'am;</p>

      <p class="justified">We are pleased to inform you that you are being hired as ${
        formData.employmentType
      } <strong>${formData.position.toUpperCase()}</strong> effective <strong>${
    formData.formattedStartDate
  }</strong> subject to the following terms and conditions, you will be assigned to one of our client the <strong>${formData.client.toUpperCase()}</strong> and your Employee I.D. Number is <strong>${formData.employeeId.toUpperCase()}</strong>,</p>

      ${sectionsHTML}

      <p class="justified closing-statement">We welcome you into our organization and trust that your association with us will be mutually beneficial!</p>

      <div class="signature-block">
        <p><strong>FERNANDO B. PANGANIBAN</strong><br>HR & Admin Manager</p>
      </div>

      <div class="acknowledgement-heading">
        <p>ACKNOWLEDGEMENT, CONSENT AND UNDERTAKING</p>
      </div>
      
      ${acknowledgementsHTML}
      
      <p class="employee-signature">${formData.name.toUpperCase()}</p>

      <div class="page-break"></div>

      <div class="annex-title"><p>ANNEX "A"</p></div>
      <div class="annex-header"><p>KEY PERFORMANCE FACTORS AND EXPECTATION PARAMETERS</p></div>
      <div class="annex-subtitle"><p>(Upang magsilbing gabay sa pagtupad ng tungkulin)</p></div>
      
      ${kpiHTML}
    </div>
  `;
}

// Create a function to generate the PDF that both preview and download can use
async function generateContractPDF(formData, contractData) {
  try {
    // Create PDF document
    const pdf = new window.jspdf.jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: [612, 936],
    });

    // PDF dimensions and margins
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 40;
    const lineHeight = 13;
    let yPos = margin;

    // Load font
    let fontFamily = "helvetica";
    try {
      const response = await fetch(
        "/document_generator/assets/fonts/verdana.ttf",
        {
          cache: "no-cache",
          headers: {
            "Cache-Control": "no-cache",
          },
        }
      );
      const arrayBuffer = await response.arrayBuffer();
      const base64String = btoa(
        String.fromCharCode(...new Uint8Array(arrayBuffer))
      );

      pdf.addFileToVFS("verdana.ttf", base64String);
      pdf.addFont("verdana.ttf", "Verdana", "normal");
      fontFamily = "Verdana";
    } catch (error) {
      console.log("Verdana font not available, using helvetica");
      fontFamily = "helvetica";
    }

    // Helper functions
    function addText(text, x, y, options = {}) {
      const fontSize = options.fontSize || 9.5;
      const fontStyle = options.fontStyle || "normal";
      const align = options.align || "left";

      pdf.setFontSize(fontSize);
      pdf.setFont(fontFamily, fontStyle);

      if (align === "center") {
        pdf.text(text, pageWidth / 2, y, { align: "center" });
      } else if (align === "right") {
        pdf.text(text, pageWidth - margin, y, { align: "right" });
      } else {
        pdf.text(text, x, y);
      }
    }

    function toCapitalizedWords(str) {
      return str.replace(/\b\w/g, char => char.toUpperCase()).replace(/\B\w/g, char => char.toLowerCase());
    }

    function renderStyledLine(pdf, segments, x, y, options = {}) {
      const fontSize = options.fontSize || 9.5;
      const maxWidth = options.maxWidth || pageWidth - margin * 2;
      let currentX = x;

      pdf.setFontSize(fontSize);

      segments.forEach((segment) => {
        pdf.setFont(fontFamily, segment.fontStyle || "normal");
        const textWidth = pdf.getTextWidth(segment.text);

        // If exceeds maxWidth, move to next line
        if (currentX + textWidth > x + maxWidth) {
          y += lineHeight;
          currentX = x;
        }
        pdf.text(segment.text, currentX, y);
        currentX += textWidth;
      });

      return y + lineHeight;
    }

    function addWrappedText(text, x, y, maxWidth, options = {}) {
      const fontSize = options.fontSize || 9.5;
      const fontStyle = options.fontStyle || "normal";
      const align = options.align || "justify";

      pdf.setFontSize(fontSize);
      pdf.setFont(fontFamily, fontStyle);

      const lines = pdf.splitTextToSize(text, maxWidth);

      for (let i = 0; i < lines.length; i++) {
        if (y + i * lineHeight > pageHeight - margin) {
          pdf.addPage();
          y = margin;
          i = 0;
        }

        if (align === "center") {
          pdf.text(lines[i], pageWidth / 2, y + i * lineHeight, {
            align: "center",
          });
        } else if (align === "justify" && i < lines.length - 1) {
          pdf.text(lines[i], x, y + i * lineHeight, {
            align: "justify",
            maxWidth: maxWidth,
          });
        } else {
          pdf.text(lines[i], x, y + i * lineHeight);
        }
      }

      return y + lines.length * lineHeight;
    }

    function checkPageBreak(requiredSpace = 45) {
      if (yPos + requiredSpace > pageHeight - margin) {
        pdf.addPage();
        yPos = margin;
      }
    }

    // Add this function inside generateContractPDF, before its usage:
    function addJustifiedText(pdf, text, x, y, maxWidth, options = {}) {
      const fontSize = options.fontSize || 9.5;
      const fontStyle = options.fontStyle || "normal";
      pdf.setFontSize(fontSize);
      pdf.setFont(fontFamily, fontStyle);

      const lines = pdf.splitTextToSize(text, maxWidth);
      lines.forEach((line, i) => {
        // Only justify if not the last line
        if (i < lines.length - 1) {
          const words = line.trim().split(/\s+/);
          if (words.length === 1) {
            pdf.text(line, x, y + i * lineHeight);
            return;
          }
          const lineTextWidth = words.reduce((acc, word) => acc + pdf.getTextWidth(word), 0);
          const spaceCount = words.length - 1;
          const totalSpaceWidth = maxWidth - lineTextWidth;
          const spaceWidth = totalSpaceWidth / spaceCount;

          let currentX = x;
          words.forEach((word, wi) => {
            pdf.text(word, currentX, y + i * lineHeight);
            if (wi < spaceCount) {
              currentX += pdf.getTextWidth(word) + spaceWidth;
            }
          });
        } else {
          // Last line: left align
          pdf.text(line, x, y + i * lineHeight);
        }
      });
      return y + lines.length * lineHeight;
    }

    // Company header
    addText(formData.companyName, 0, yPos, {
      fontSize: 12,
      fontStyle: "bold",
      align: "center",
    });
    yPos += lineHeight + 5;

    addText(
      formData.companyAddress,
      0,
      yPos,
      {
        fontSize: 8.5,
        align: "center",
      }
    );
    yPos += lineHeight * 1.8;

    addText(
      `${formData.employmentType.toUpperCase()} EMPLOYMENT CONTRACT`,
      0,
      yPos,
      {
        fontSize: 11,
        fontStyle: "bold",
        align: "center",
      }
    );
    yPos += lineHeight * 2.6;

    // Employee info
    addText(formData.name.toUpperCase(), margin, yPos, {
      fontSize: 10,
      fontStyle: "bold",
    });
    yPos += lineHeight * 0.9;

    yPos = addJustifiedText(
      pdf,
      toCapitalizedWords(formData.address),
      margin,
      yPos,
      pageWidth - margin * 2,
      { fontSize: 9.5 }
    );
    yPos += lineHeight * 0.9;

    addText(formData.email, margin, yPos, { fontSize: 9.5 });
    yPos += lineHeight * 0.9;

    addText(formData.formattedPhone, margin, yPos, { fontSize: 9.5 });
    yPos += lineHeight * 2.3;

    // Greeting
    addText("Sir/Ma'am;", margin, yPos, {
      fontSize: 9.5,
    });
    yPos += lineHeight * 1.8;

    // Opening paragraph
    const openingText = `We are pleased to inform you that you are being hired as ${formData.employmentType} **${formData.position.toUpperCase()}** effective **${formData.formattedStartDate}** subject to the following terms and conditions, you will be assigned to one of our client the **${formData.client.toUpperCase()}** and your Employee I.D. Number is **${formData.employeeId.toUpperCase()}.**`;

    // Use renderStyledText instead of addJustifiedText for markdown parsing
    yPos = renderStyledText(
      pdf,
      openingText,
      margin,
      yPos,
      pageWidth - margin * 2,
      { fontSize: 9.5, fontFamily: fontFamily }
    );
    yPos += lineHeight * 0.9;

    // Add sections
    contractData.sections.forEach((section) => {
      checkPageBreak(45);

      addText(section.title, margin, yPos, {
        fontSize: 10,
        fontStyle: "bold",
      });
      yPos += lineHeight + 4;

      // Check if section should use markdown rendering
      if (section.useMarkdown) {
        yPos = renderStyledText(
          pdf,
          section.content,
          margin,
          yPos,
          pageWidth - margin * 2,
          { fontSize: 9.5, fontFamily: fontFamily } // Add fontFamily to options
        );
      } else {
        yPos = addJustifiedText(
          pdf,
          section.content,
          margin,
          yPos,
          pageWidth - margin * 2,
          { fontSize: 9.5 }
        );
      }
      yPos += lineHeight * 0.2;

      if (section.list) {
        section.list.forEach((item, index) => {
          checkPageBreak(28);
          let listText = `${index + 1}. ${item}`;
          yPos = addJustifiedText(
            pdf,
            listText,
            margin + 20,
            yPos,
            pageWidth - margin * 2 - 20,
            { fontSize: 9.5 }
          );

          if (section.subList && section.subList[index]) {
            // Add extra spacing before the sub-list
            yPos += lineHeight * 0.3; // Adjust this value as needed (e.g., 0.2, 0.3, 0.4)
            section.subList[index].forEach((subItem, subIndex) => {
              checkPageBreak(23);
              const subLetter = String.fromCharCode(97 + subIndex);
              yPos = addJustifiedText(
                pdf,
                `   ${subLetter}) ${subItem}`,
                margin + 35,
                yPos,
                pageWidth - margin * 2 - 35,
                { fontSize: 9.5 }
              );
              yPos += lineHeight * 0.25;
            });
          }

          yPos += lineHeight * 0.4;
        });
      }

      yPos += lineHeight * 0.9;
    });

    // Closing statement
    checkPageBreak(35);
    yPos = addJustifiedText(
      pdf,
      "We welcome you into our organization and trust that your association with us will be mutually beneficial!",
      margin,
      yPos,
      pageWidth - margin * 2,
      { fontSize: 9.5 }
    );
    yPos += lineHeight * 1.8;

    yPos += lineHeight * 2;
    // Signature
    addText("FERNANDO B. PANGANIBAN", margin + 330, yPos, {
      fontSize: 9.5,
      fontStyle: "bold",
    });
    yPos += lineHeight;
    addText("HR & Admin Manager", margin + 370, yPos, {
      fontSize: 9.5,
    });
    yPos += lineHeight * 3.8;

    // Acknowledgement section
    checkPageBreak(75);
    addText("ACKNOWLEDGEMENT, CONSENT AND UNDERTAKING", 0, yPos, {
      fontSize: 10,
      fontStyle: "bold",
      align: "center",
    });
    yPos += lineHeight * 1.3;

    contractData.acknowledgements.forEach((ack) => {
      checkPageBreak(40);
      yPos = addJustifiedText(
        pdf,
        ack,
        margin,
        yPos,
        pageWidth - margin * 2,
        { fontSize: 9.5 }
      );
      yPos += lineHeight * 1.1;
    });

    // Employee signature
    yPos += lineHeight * 1.9;
    const signatureMaxWidth = 200;
    const signatureLines = pdf.splitTextToSize(formData.name.toUpperCase(), signatureMaxWidth);
    signatureLines.forEach((line, i) => {
      addText(line, pageWidth - margin - signatureMaxWidth, yPos + i * lineHeight, {
        fontSize: 9.5,
        fontStyle: "bold",
        align: "right",
      });
    });
    yPos += lineHeight * signatureLines.length;

    // Force new page for Annex A
    pdf.addPage();
    yPos = margin;

    yPos += lineHeight * 3;

    addText('ANNEX "A"', 0, yPos, {
      fontSize: 16,
      fontStyle: "bold",
      align: "right",
    });
    yPos += lineHeight * 3.3;

    addText("KEY PERFORMANCE FACTORS AND EXPECTATION PARAMETERS", 0, yPos, {
      fontSize: 14,
      fontStyle: "bold",
      align: "center",
    });
    yPos += lineHeight * 1.2;

    addText("(Upang magsilbing gabay sa pagtupad ng tungkulin)", 0, yPos, {
      fontSize: 12,
      align: "center",
    });
    yPos += lineHeight * 4.3;

    // KPI sections
    contractData.kpiSections.forEach((section, sectionIndex) => {
      const pageBreakThreshold =
        sectionIndex === contractData.kpiSections.length - 1 ? 110 : 45;

      checkPageBreak(pageBreakThreshold);

      addText(section.title, margin, yPos, {
        fontSize: 12,
        fontStyle: "bold",
      });
      yPos += lineHeight + 4;

      section.items.forEach((item, itemIndex) => {
        const itemPageBreakThreshold =
          sectionIndex === contractData.kpiSections.length - 1 &&
          itemIndex === section.items.length - 1
            ? 75
            : 28;

        checkPageBreak(itemPageBreakThreshold);

        yPos = addJustifiedText(
          pdf,
          `• ${item}`,
          margin + 15,
          yPos,
          pageWidth - margin * 2 - 15,
          { fontSize: 11 }
        );
        yPos += lineHeight * 0.35;
      });

      yPos += lineHeight * 0.9;
    });

    return pdf;
  } catch (error) {
    console.error("PDF generation error:", error);
    throw error;
  }
}

// Preview button event listener (modified)
document
  .getElementById("previewBtn")
  .addEventListener("click", async function () {
    try {
      const loader = document.getElementById("downloadLoader");
      loader.classList.remove("d-none");
      this.disabled = true;

      const formData = collectFormData();
      const contractData = generateContractData(formData);

      // Generate the PDF and store it for later download
      const pdf = await generateContractPDF(formData, contractData);

      // Convert the PDF to a data URL for preview
      const pdfData = pdf.output("datauristring");

      // Create an iframe to display the PDF
      const previewFrame = `<iframe src="${pdfData}" width="100%" height="100%" style="border: none; min-height: 70vh; max-height: 80vh;" class="responsive-pdf-iframe"></iframe>`;

      // Update the preview modal with the iframe
      document.getElementById("contractPreviewBody").innerHTML = previewFrame;

      // Store the PDF in a global variable for download button
      window.generatedPdf = pdf;

      // Show modal
      const modal = new bootstrap.Modal(
        document.getElementById("contractPreviewModal")
      );
      modal.show();
    } catch (error) {
      console.error("Preview generation error:", error);
      alert(
        "An error occurred while generating the preview. Please try again."
      );
    } finally {
      const loader = document.getElementById("downloadLoader");
      loader.classList.add("d-none");
      this.disabled = false;
    }
  });

// Download PDF button event listener (modified)
document
  .getElementById("downloadPdfBtn")
  .addEventListener("click", function () {
    const loader = document.getElementById("downloadLoader");
    loader.classList.remove("d-none");
    this.disabled = true;

    try {
      const formData = collectFormData();
      const fileName = `${formData.name.replace(
        /\s/g,
        "_"
      )}_Employment_Contract.pdf`;

      // If we have already generated the PDF during preview, use that
      if (window.generatedPdf) {
        window.generatedPdf.save(fileName);
      } else {
        // Otherwise generate a new PDF (fallback)
        const contractData = generateContractData(formData);
        generateContractPDF(formData, contractData).then((pdf) => {
          pdf.save(fileName);
        });
      }
    } catch (error) {
      console.error("PDF download error:", error);
      alert("An error occurred while downloading the PDF. Please try again.");
    } finally {
      loader.classList.add("d-none");
      this.disabled = false;
    }
  });

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("downloadPdfBtn").click();
});

// Add markdown initialization function
function initializeMarkdownParser() {
  if (typeof window.markdownit === 'undefined') {
    console.warn('markdown-it library not loaded, falling back to plain text');
    return null;
  }
  
  return window.markdownit({
    html: false,        // Disable HTML tags for security
    xhtmlOut: false,   
    breaks: true,       // Convert '\n' in paragraphs into line breaks
    linkify: false,     // Don't auto-convert URLs
    typographer: true,  // Enable quotes beautification
  });
}

// Enhanced function to parse markdown content for PDF rendering
function parseMarkdownForPDF(text, md) {
  if (!md) {
    // Fallback: return plain text segments
    return [{ text: text, fontStyle: 'normal' }];
  }

  const tokens = md.parse(text);
  const segments = [];
  
  function processInlineTokens(inlineTokens) {
    let currentStyle = 'normal';
    
    inlineTokens.forEach((token) => {
      switch (token.type) {
        case 'text':
          segments.push({
            text: token.content,
            fontStyle: currentStyle
          });
          break;
        case 'strong_open':
          currentStyle = 'bold';
          break;
        case 'strong_close':
          currentStyle = 'normal';
          break;
        case 'em_open':
          currentStyle = 'italic';
          break;
        case 'em_close':
          currentStyle = 'normal';
          break;
        case 'softbreak':
        case 'hardbreak':
          segments.push({
            text: ' ',
            fontStyle: currentStyle
          });
          break;
      }
    });
  }
  
  tokens.forEach(token => {
    if (token.type === 'inline' && token.children) {
      processInlineTokens(token.children);
    } else if (token.type === 'paragraph_open') {
      // Start of paragraph - could add spacing logic here
    }
  });
  
  return segments;
}

// Enhanced renderStyledLine function to handle markdown segments
function renderStyledText(pdf, text, x, y, maxWidth, options = {}) {
  const md = initializeMarkdownParser();
  const segments = parseMarkdownForPDF(text, md);
  
  const fontSize = options.fontSize || 9.5;
  const fontFamily = options.fontFamily || 'helvetica';
  const lineHeight = 13;
  let currentY = y;
  
  pdf.setFontSize(fontSize);
  
  // Group segments into lines for justification
  const lines = [];
  let currentLine = [];
  let currentLineWidth = 0;
  
  segments.forEach((segment) => {
    const words = segment.text.split(/\s+/).filter(word => word.trim() !== '');
    
    words.forEach((word) => {
      pdf.setFont(fontFamily, segment.fontStyle || 'normal');
      const wordWidth = pdf.getTextWidth(word);
      const spaceWidth = pdf.getTextWidth(' ');
      
      // Check if adding this word would exceed the line width
      if (currentLineWidth + wordWidth + (currentLine.length > 0 ? spaceWidth : 0) > maxWidth && currentLine.length > 0) {
        // Finish current line and start new one
        lines.push([...currentLine]);
        currentLine = [{ text: word, fontStyle: segment.fontStyle, width: wordWidth }];
        currentLineWidth = wordWidth;
      } else {
        // Add word to current line
        currentLine.push({ text: word, fontStyle: segment.fontStyle, width: wordWidth });
        currentLineWidth += wordWidth + (currentLine.length > 1 ? spaceWidth : 0);
      }
    });
  });
  
  // Add the last line if it has content
  if (currentLine.length > 0) {
    lines.push(currentLine);
  }
  
  // Render each line with justification
  lines.forEach((line, lineIndex) => {
    // Check for page break
    if (currentY > pdf.internal.pageSize.getHeight() - 40) {
      pdf.addPage();
      currentY = 40;
    }
    
    const isLastLine = lineIndex === lines.length - 1;
    const totalWordsWidth = line.reduce((sum, word) => sum + word.width, 0);
    const spaceWidth = pdf.getTextWidth(' ');
    const totalNormalSpaces = (line.length - 1) * spaceWidth;
    const availableSpaceWidth = maxWidth - totalWordsWidth;
    
    let currentX = x;
    
    // Calculate justified spacing (only for non-last lines with multiple words)
    if (!isLastLine && line.length > 1) {
      const extraSpace = availableSpaceWidth - totalNormalSpaces;
      const spacesBetweenWords = line.length - 1;
      const justifiedSpaceWidth = spaceWidth + (extraSpace / spacesBetweenWords);
      
      line.forEach((word, wordIndex) => {
        pdf.setFont(fontFamily, word.fontStyle || 'normal');
        pdf.text(word.text, currentX, currentY);
        currentX += word.width;
        
        // Add justified space between words (except after last word)
        if (wordIndex < line.length - 1) {
          currentX += justifiedSpaceWidth;
        }
      });
    } else {
      // Left-align the last line or single-word lines
      line.forEach((word, wordIndex) => {
        pdf.setFont(fontFamily, word.fontStyle || 'normal');
        pdf.text(word.text, currentX, currentY);
        currentX += word.width;
        
        // Add normal space between words (except after last word)
        if (wordIndex < line.length - 1) {
          currentX += spaceWidth;
        }
      });
    }
    
    currentY += lineHeight;
  });
  
  return currentY;
}
