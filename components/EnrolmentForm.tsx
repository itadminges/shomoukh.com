'use client';

import React, { useState } from 'react';

const healthConditions = [
  'Chicken Pox', 'Asthma', 'Measles', 'Kidney Difficulties',
  'Eczema/Skin Conditions', 'Speech Difficulties', 'Rubella', 'Visual Difficulties',
  'Malaria', 'Epilepsy', 'Orthopaedical Difficulties', 'Whooping cough',
  'Tuberculosis', 'Hearing Related Difficulties', 'Diabetes', 'Other Health Difficulties',
];

const additionalServices = [
  { id: 'gifted', label: 'Gifted and Talented' },
  { id: 'medication', label: 'Medication to Aid the Learning Process' },
  { id: 'smallGroup', label: 'Small Group Learning Support' },
  { id: 'adhd', label: 'ADHD/ADD Interventions' },
  { id: 'individual', label: 'Individual Learning Support' },
  { id: 'occupational', label: 'Occupational Therapy' },
  { id: 'speech', label: 'Speech Language Therapy' },
  { id: 'physical', label: 'Physical Disabilities' },
  { id: 'behaviour', label: 'Behaviour Management' },
];

export function EnrolmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="enrolment-form-wrapper">
      <div className="enrolment-banner">
        <h2>ENROLMENT FORM</h2>
      </div>

      {submitted ? (
        <div className="enrolment-success">
          <h3>Thank You for Your Application!</h3>
          <p>We have received your enrolment form. Our admissions team will review your details and contact you shortly.</p>
        </div>
      ) : (
        <form className="enrolment-form" onSubmit={handleSubmit}>
          {/* Top Opening: Academic Year & Campus */}
          <div className="form-row-two-col opening-row">
            <div className="form-group">
              <label className="form-label">
                APPLYING FOR ACADEMIC YEAR <span className="req">*</span>
              </label>
              <select className="form-pill-select" required defaultValue="">
                <option value="" disabled>Academic Year</option>
                <option value="2024/2025">2024 / 2025</option>
                <option value="2025/2026">2025 / 2026</option>
                <option value="2026/2027">2026 / 2027</option>
                <option value="2027/2028">2027 / 2028</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                Please Choose Your Campus <span className="req">*</span>
              </label>
              <div className="radio-vertical-list">
                <label className="radio-item">
                  <input type="radio" name="campus" value="Al Mouj" required />
                  <span>Shomoukh Campus Al Mouj</span>
                </label>
                <label className="radio-item">
                  <input type="radio" name="campus" value="Al Qurum" required />
                  <span>Shomoukh Campus Al Qurum</span>
                </label>
              </div>
            </div>
          </div>

          {/* Section: CHILD INFORMATION */}
          <div className="form-section-header">CHILD INFORMATION</div>
          <div className="form-row-two-col">
            <div className="form-group">
              <label className="form-label">Child’s Full Name (as per passport) <span className="req">*</span></label>
              <input type="text" className="form-pill-input" placeholder="E.g. Alex" required />
            </div>
            <div className="form-group">
              <label className="form-label">Preferred Name <span className="req">*</span></label>
              <input type="text" className="form-pill-input" placeholder="E.g. Alex" required />
            </div>
          </div>

          <div className="form-row-three-col">
            <div className="form-group">
              <label className="form-label">Nationality (as per passport) <span className="req">*</span></label>
              <input type="text" className="form-pill-input" placeholder="E.g. British" required />
            </div>
            <div className="form-group">
              <label className="form-label">Date of Birth (dd/mm/yy) <span className="req">*</span></label>
              <input type="text" className="form-pill-input" placeholder="Choose Date" required />
            </div>
            <div className="form-group">
              <label className="form-label">Gender <span className="req">*</span></label>
              <div className="radio-inline-row">
                <label className="radio-item">
                  <input type="radio" name="gender" value="Male" required />
                  <span>Male</span>
                </label>
                <label className="radio-item">
                  <input type="radio" name="gender" value="Female" required />
                  <span>Female</span>
                </label>
              </div>
            </div>
          </div>

          <div className="form-row-three-col">
            <div className="form-group">
              <label className="form-label">Native Language <span className="req">*</span></label>
              <input type="text" className="form-pill-input" placeholder="E.g. Native Language" required />
            </div>
            <div className="form-group">
              <label className="form-label">Other Languages</label>
              <input type="text" className="form-pill-input" placeholder="Other Languages" />
            </div>
            <div className="form-group">
              <label className="form-label">Religion <span className="req">*</span></label>
              <input type="text" className="form-pill-input" placeholder="Religion" required />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Address <span className="req">*</span></label>
            <input type="text" className="form-pill-input" placeholder="Address" required />
          </div>

          {/* Section: PREVIOUS NURSERIES/SCHOOLS INFORMATION */}
          <div className="form-section-header">PREVIOUS NURSERIES/SCHOOLS INFORMATION</div>
          <div className="form-row-three-col">
            <div className="form-group">
              <label className="form-label">Nursery/School Name</label>
              <input type="text" className="form-pill-input" placeholder="Nursery Name" />
            </div>
            <div className="form-group">
              <label className="form-label">Country</label>
              <input type="text" className="form-pill-input" placeholder="Country" />
            </div>
            <div className="form-group">
              <label className="form-label">Academic Years</label>
              <input type="text" className="form-pill-input" placeholder="Academic Years" />
            </div>
          </div>

          <div className="form-row-three-col">
            <div className="form-group">
              <label className="form-label">Nursery/School Name</label>
              <input type="text" className="form-pill-input" placeholder="Nursery Name" />
            </div>
            <div className="form-group">
              <label className="form-label">Country</label>
              <input type="text" className="form-pill-input" placeholder="Country" />
            </div>
            <div className="form-group">
              <label className="form-label">Academic Years</label>
              <input type="text" className="form-pill-input" placeholder="Academic Years" />
            </div>
          </div>

          {/* Section: SIBLINGS INFORMATION */}
          <div className="form-section-header">SIBLINGS INFORMATION</div>
          <div className="form-row-three-col align-items-center">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-pill-input" placeholder="E.g. John Deo" />
            </div>
            <div className="form-group">
              <label className="form-label">Class</label>
              <input type="text" className="form-pill-input" placeholder="Class" />
            </div>
            <div className="form-group">
              <label className="form-label">Status</label>
              <div className="radio-inline-row">
                <label className="radio-item">
                  <input type="radio" name="sibling1_status" value="New" />
                  <span>New</span>
                </label>
                <label className="radio-item">
                  <input type="radio" name="sibling1_status" value="Enrolled" />
                  <span>Enrolled at Shomoukh</span>
                </label>
              </div>
            </div>
          </div>

          <div className="form-row-three-col align-items-center">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-pill-input" placeholder="E.g. John Deo" />
            </div>
            <div className="form-group">
              <label className="form-label">Class</label>
              <input type="text" className="form-pill-input" placeholder="Class" />
            </div>
            <div className="form-group">
              <label className="form-label">Status</label>
              <div className="radio-inline-row">
                <label className="radio-item">
                  <input type="radio" name="sibling2_status" value="New" />
                  <span>New</span>
                </label>
                <label className="radio-item">
                  <input type="radio" name="sibling2_status" value="Enrolled" />
                  <span>Enrolled at Shomoukh</span>
                </label>
              </div>
            </div>
          </div>

          {/* Section: ADDITIONAL INFORMATION */}
          <div className="form-section-header">ADDITIONAL INFORMATION</div>
          <p className="form-subtitle">Has your child been identified with or received services in any of the following ?</p>

          <div className="form-grid-two-col">
            {additionalServices.map((svc) => (
              <div key={svc.id} className="yes-no-group">
                <label className="form-label">{svc.label} <span className="req">*</span></label>
                <div className="radio-inline-row">
                  <label className="radio-item">
                    <input type="radio" name={`service_${svc.id}`} value="Yes" required />
                    <span>Yes</span>
                  </label>
                  <label className="radio-item">
                    <input type="radio" name={`service_${svc.id}`} value="No" required />
                    <span>No</span>
                  </label>
                </div>
              </div>
            ))}
            <div className="form-group">
              <label className="form-label">If yes please provide details</label>
              <input type="text" className="form-pill-input" placeholder="Provide details" />
            </div>
          </div>

          <div className="form-group" style={{ marginTop: '16px' }}>
            <label className="form-label">List other Interventions here (Please provide documents):</label>
            <input type="text" className="form-pill-input" placeholder="Other Interventions" />
          </div>

          <div className="form-group" style={{ marginTop: '20px' }}>
            <label className="form-label">For Nursery/School: Full-week attendance (Sunday to Thursday) <span className="req">*</span></label>
            <div className="radio-vertical-list">
              {['Nursery', 'KG1', 'KG2', 'Grade 1', 'Grade 2'].map((item) => (
                <label key={item} className="radio-item">
                  <input type="radio" name="full_week_program" value={item} required />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group" style={{ marginTop: '20px' }}>
            <label className="form-label">Choose the attendance schedule for your child ( Please select the option that applies to your child’s program for nursery) <span className="req">*</span></label>
            <div className="radio-vertical-list">
              {['3 Days a week', '4 Days a week', '5 Days a week'].map((item) => (
                <label key={item} className="radio-item">
                  <input type="radio" name="attendance_schedule" value={item} required />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group" style={{ marginTop: '20px' }}>
            <label className="form-label">Select your preferred days of attendance: days must be consecutive. (The chosen days will be confirmed by the admission team in the final step of enrollment) <span className="req">*</span></label>
            <div className="checkbox-inline-row">
              {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'].map((day) => (
                <label key={day} className="checkbox-item">
                  <input type="checkbox" name="preferred_days" value={day} />
                  <span>{day}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group" style={{ marginTop: '20px' }}>
            <label className="form-label">Has your child ever been retained or repeated a grade? <span className="req">*</span></label>
            <div className="radio-inline-row">
              <label className="radio-item"><input type="radio" name="retained" value="Yes" required /><span>Yes</span></label>
              <label className="radio-item"><input type="radio" name="retained" value="No" required /><span>No</span></label>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">If yes, which grade?</label>
            <input type="text" className="form-pill-input" placeholder="Provide details" />
          </div>

          <div className="form-group" style={{ marginTop: '20px' }}>
            <label className="form-label">Has your child ever been asked to leave a nursery/school ? <span className="req">*</span></label>
            <div className="radio-inline-row">
              <label className="radio-item"><input type="radio" name="asked_to_leave" value="Yes" required /><span>Yes</span></label>
              <label className="radio-item"><input type="radio" name="asked_to_leave" value="No" required /><span>No</span></label>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">If yes, please indicate the reason</label>
            <input type="text" className="form-pill-input" placeholder="Provide details" />
          </div>

          {/* Section: PARENTS/GUARDIAN INFORMATION */}
          <div className="form-section-header">PARENTS/GUARDIAN INFORMATION</div>
          <div className="form-row-three-col">
            <div className="form-group">
              <label className="form-label">Father’s Full Name <span className="req">*</span></label>
              <input type="text" className="form-pill-input" placeholder="E.g. John Doe" required />
            </div>
            <div className="form-group">
              <label className="form-label">Mobile No. <span className="req">*</span></label>
              <input type="text" className="form-pill-input" placeholder="E.g. +1 300 400 5000" required />
            </div>
            <div className="form-group">
              <label className="form-label">Occupation <span className="req">*</span></label>
              <input type="text" className="form-pill-input" required />
            </div>
          </div>

          <div className="form-row-three-col">
            <div className="form-group">
              <label className="form-label">Email Address <span className="req">*</span></label>
              <input type="email" className="form-pill-input" placeholder="E.g. john@doe.com" required />
            </div>
            <div className="form-group">
              <label className="form-label">Other Phone No.</label>
              <input type="text" className="form-pill-input" placeholder="E.g. +1 300 400 5000" />
            </div>
            <div className="form-group">
              <label className="form-label">Office Phone No.</label>
              <input type="text" className="form-pill-input" placeholder="E.g. +1 300 400 5000" />
            </div>
          </div>

          <div className="form-row-three-col">
            <div className="form-group">
              <label className="form-label">Mother’s Full Name <span className="req">*</span></label>
              <input type="text" className="form-pill-input" placeholder="E.g. Emi Deo" required />
            </div>
            <div className="form-group">
              <label className="form-label">Mobile No. <span className="req">*</span></label>
              <input type="text" className="form-pill-input" placeholder="E.g. +1 300 400 5000" required />
            </div>
            <div className="form-group">
              <label className="form-label">Occupation <span className="req">*</span></label>
              <input type="text" className="form-pill-input" required />
            </div>
          </div>

          <div className="form-row-two-col">
            <div className="form-group">
              <label className="form-label">Email Address <span className="req">*</span></label>
              <input type="email" className="form-pill-input" placeholder="E.g. john@doe.com" required />
            </div>
            <div className="form-group">
              <label className="form-label">Other Phone No.</label>
              <input type="text" className="form-pill-input" placeholder="E.g. +1 300 400 5000" />
            </div>
          </div>

          <div className="form-row-two-col">
            <div className="form-group">
              <label className="form-label">Guardian’s Full Name</label>
              <input type="text" className="form-pill-input" placeholder="E.g. Emi Deo" />
            </div>
            <div className="form-group">
              <label className="form-label">Mobile No.</label>
              <input type="text" className="form-pill-input" placeholder="E.g. +1 300 400 5000" />
            </div>
          </div>

          <div className="form-row-two-col">
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-pill-input" placeholder="E.g. john@doe.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Relationship</label>
              <input type="text" className="form-pill-input" />
            </div>
          </div>

          {/* Section: TRANSPORTATION DETAILS */}
          <div className="form-section-header">TRANSPORTATION DETAILS</div>
          <p className="form-subtitle">Name and phone number of the persons who will drop off and pick up the child:</p>

          <div className="form-row-three-col">
            <div className="form-group">
              <label className="form-label">Name of the person who will drop off the child <span className="req">*</span></label>
              <input type="text" className="form-pill-input" placeholder="E.g. John Doe" required />
            </div>
            <div className="form-group">
              <label className="form-label">Relationship <span className="req">*</span></label>
              <input type="text" className="form-pill-input" required />
            </div>
            <div className="form-group">
              <label className="form-label">Mobile No <span className="req">*</span></label>
              <input type="text" className="form-pill-input" placeholder="E.g. +1 300 400 5000" required />
            </div>
          </div>

          <div className="form-row-three-col">
            <div className="form-group">
              <label className="form-label">Name of the person who will pick up the child: <span className="req">*</span></label>
              <input type="text" className="form-pill-input" placeholder="E.g. John Doe" required />
            </div>
            <div className="form-group">
              <label className="form-label">Relationship <span className="req">*</span></label>
              <input type="text" className="form-pill-input" required />
            </div>
            <div className="form-group">
              <label className="form-label">Mobile No <span className="req">*</span></label>
              <input type="text" className="form-pill-input" placeholder="E.g. +1 300 400 5000" required />
            </div>
          </div>

          {/* Section: MEDICAL FORM */}
          <div className="form-section-header">MEDICAL FORM</div>
          <p className="form-subtitle">To be completed prior to admission. The information will greatly assist us when dealing with any emergencies during nursery/school hours.</p>

          <div className="form-row-four-col">
            <div className="form-group">
              <label className="form-label">Doctor’s Name</label>
              <input type="text" className="form-pill-input" placeholder="E.g. Dr. Joseph" />
            </div>
            <div className="form-group">
              <label className="form-label">Clinic/Hospital</label>
              <input type="text" className="form-pill-input" placeholder="Clinic's Name" />
            </div>
            <div className="form-group">
              <label className="form-label">Email address</label>
              <input type="email" className="form-pill-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Mobile No.</label>
              <input type="text" className="form-pill-input" placeholder="E.g. +1 300 400 5000" />
            </div>
          </div>

          {/* Section: ALLERGIES */}
          <div className="form-section-header">ALLERGIES</div>
          <div className="form-group">
            <label className="form-label">Does your child have any known allergies? <span className="req">*</span></label>
            <div className="radio-inline-row">
              <label className="radio-item"><input type="radio" name="allergies" value="Yes" required /><span>Yes</span></label>
              <label className="radio-item"><input type="radio" name="allergies" value="No" required /><span>No</span></label>
            </div>
          </div>
          <p className="form-subtitle">Please complete the following. Non-completion is taken as indicating no known allergies</p>

          <div className="form-row-three-col">
            <div className="form-group">
              <label className="form-label">Allergen</label>
              <input type="text" className="form-pill-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Reaction</label>
              <input type="text" className="form-pill-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Treatment</label>
              <input type="text" className="form-pill-input" />
            </div>
          </div>

          <div className="form-row-three-col">
            <div className="form-group">
              <label className="form-label">Allergen</label>
              <input type="text" className="form-pill-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Reaction</label>
              <input type="text" className="form-pill-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Treatment</label>
              <input type="text" className="form-pill-input" />
            </div>
          </div>

          {/* Section: HEALTH HISTORY */}
          <div className="form-section-header">HEALTH HISTORY</div>
          <p className="form-subtitle">Please indicate with a ✓ if your child has experienced any of the following:</p>

          <div className="health-history-grid">
            {healthConditions.map((cond) => (
              <div key={cond} className="health-item">
                <label className="form-label">{cond} <span className="req">*</span></label>
                <div className="radio-inline-row">
                  <label className="radio-item"><input type="radio" name={`health_${cond}`} value="Yes" required /><span>Yes</span></label>
                  <label className="radio-item"><input type="radio" name={`health_${cond}`} value="No" required /><span>No</span></label>
                </div>
              </div>
            ))}
          </div>

          <div className="form-group" style={{ marginTop: '20px' }}>
            <label className="form-label">Please provide details of other health difficulties if any</label>
            <input type="text" className="form-pill-input" placeholder="Eg. Please specify any other health difficulties" />
          </div>

          <div className="form-group" style={{ marginTop: '20px' }}>
            <label className="form-label">Does the child have any medical conditions? <span className="req">*</span></label>
            <div className="radio-inline-row">
              <label className="radio-item"><input type="radio" name="medical_conditions" value="Yes" required /><span>Yes</span></label>
              <label className="radio-item"><input type="radio" name="medical_conditions" value="No" required /><span>No</span></label>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">If yes please specify medical conditions?</label>
            <input type="text" className="form-pill-input" placeholder="Eg. Please specify medical conditions?" />
          </div>

          {/* Section: Other */}
          <div className="form-section-header" style={{ textTransform: 'none' }}>Other</div>
          <div className="form-group">
            <label className="form-label">Permission to administer non-prescriptive medicines such as lbuprofen, Paracetamol and Insect bite cream. <span className="req">*</span></label>
            <div className="radio-inline-row">
              <label className="radio-item"><input type="radio" name="permission_medicines" value="Yes" required /><span>Yes</span></label>
              <label className="radio-item"><input type="radio" name="permission_medicines" value="No" required /><span>No</span></label>
            </div>
          </div>

          {/* Section: EMERGENCIES */}
          <div className="form-section-header">EMERGENCIES</div>
          <p className="emergencies-text">
            In the event of your child having any illness or an accidental injury whilst at the nursery/school, we reserve the right to administer First Aid and emergency treatment. If the Parent/Guardian cannot be reached, it is at discretion of the nursery/school to take the child to the hospital of their choice if deemed necessary. Parent/Guardian will be asked to pay all costs incurred and take full responsibility for the treatment required. Please list two people that can be contacted in case of emergencies.
          </p>

          <div className="form-row-three-col">
            <div className="form-group">
              <label className="form-label">Full Name <span className="req">*</span></label>
              <input type="text" className="form-pill-input" placeholder="E.g. John Doe" required />
            </div>
            <div className="form-group">
              <label className="form-label">Relationship</label>
              <input type="text" className="form-pill-input" placeholder="Eg: Mother/Father" />
            </div>
            <div className="form-group">
              <label className="form-label">Mobile No. <span className="req">*</span></label>
              <input type="text" className="form-pill-input" placeholder="E.g. +1 300 400 5000" required />
            </div>
          </div>

          <div className="form-row-three-col">
            <div className="form-group">
              <label className="form-label">Full Name <span className="req">*</span></label>
              <input type="text" className="form-pill-input" placeholder="E.g. John Doe" required />
            </div>
            <div className="form-group">
              <label className="form-label">Relationship</label>
              <input type="text" className="form-pill-input" placeholder="Eg: Mother/Father" />
            </div>
            <div className="form-group">
              <label className="form-label">Mobile No. <span className="req">*</span></label>
              <input type="text" className="form-pill-input" placeholder="E.g. +1 300 400 5000" required />
            </div>
          </div>

          {/* Section: REQUIRED DOCUMENTS */}
          <div className="form-section-header">REQUIRED DOCUMENTS</div>
          <p className="form-subtitle">Kindly submit the following documents to the admission department:</p>

          <div className="required-docs-two-col">
            <ol className="docs-list">
              <li>Copy of child’s valid passport (for Omani &amp; non Omani)</li>
              <li>Copy of father’s valid passport (for Omani and non-Omani)</li>
              <li>Copy of the parents’ Omani resident cards (both sides)</li>
              <li>Copy of birth certificate, attested and translated into Arabic or English</li>
              <li>Copies of valid passports or Omani resident cards of the person who will drop off and pickup the child</li>
              <li>If the child is coming from outside Oman, the report must be attested by the Ministry of Education, the Ministry of Foreign Affairs, and the Embassy of Oman in that country or relevant ministry for GCC countries.</li>
            </ol>
            <ol className="docs-list" start={2}>
              <li>Copy of the child’s Omani resident card (both sides)</li>
              <li>Copy of mother’s valid passport (for Omani and non-Omani)</li>
              <li>Recent passport-size photographs of the child and parents</li>
              <li>Copy of the vaccination certificate/records</li>
              <li>If the child has any medical or health condition, a copy of the doctor’s report must be submitted.</li>
              <li>If transferring from another school in Oman, the educational portal transfer number/letter issued by the previous school is required. Registration is considered provisional unitl the transfer is completed.</li>
            </ol>
          </div>

          <div className="acknowledgement-group">
            <label className="form-label">Acknowledgement <span className="req">*</span></label>
            <label className="acknowledgement-checkbox">
              <input type="checkbox" required />
              <span>
                I hereby certify that the information provided on this form is true. I am responsible for any liability arising from any false or missing information. I have read and understood all the information on the Shomoukh enrolment form and I fully agree to be bound by it.
              </span>
            </label>
          </div>

          <button type="submit" className="enrolment-submit-btn">
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
}
