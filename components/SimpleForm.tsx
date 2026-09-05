'use client';

import { useState } from 'react';

export function SimpleForm({ tour = false }: { tour?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const entries = Array.from(data.entries())
      .filter(([label]) => label !== 'website')
      .map(([label, value]) => ({ section: tour ? 'BOOK A VISIT' : 'CONTACT', label, value: String(value) }));
    setStatus('sending');
    try {
      const response = await fetch('/api/form-submission', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: tour ? 'Book a Visit' : 'Contact enquiry', campus: data.get('Choose Shomoukh campus'), entries, website: data.get('website') }),
      });
      if (!response.ok) throw new Error();
      setStatus('sent');
      form.reset();
    } catch { setStatus('error'); }
  }

  if (status === 'sent') {
    const heading = tour ? 'Thank you for booking a visit.' : 'Thank you for contacting us.';
    return (
      <div className="submission-success form-success-screen" role="status">
        <div className="submission-success__mark" aria-hidden="true">✓</div>
        <p className="submission-success__eyebrow">SHOMOUKH NURSERY SCHOOL</p>
        <h2>{heading}</h2>
        <p>Our team will be in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`reference-form${tour ? ' tour-form' : ''}`}>
      <input className="form-honeypot" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label>Please enter your name *<input name={tour ? 'Please enter your name' : 'Name'} placeholder={tour ? 'E.g. John' : ''} required /></label>
      <label>Email Address *<input name="Email Address" type="email" placeholder={tour ? 'E.g. john@doe.com' : ''} required /></label>
      <label>Your child&apos;s date of birth<input name="Your child's date of birth" type="date" required /></label>
      {tour && <label>When would you like to visit? *<input name="When would you like to visit?" type="date" required /></label>}
      <label>Phone Number *<input name="Phone Number" placeholder={tour ? 'E.g. +1 3004005000' : ''} required /></label>
      <label>Choose Shomoukh campus *<select name="Choose Shomoukh campus" required defaultValue=""><option value="" disabled>Select a campus</option><option value="Al Qurum">Al Qurum Campus</option><option value="Al Mouj">Al Mouj Campus</option></select></label>
      {tour && <label>Please choose visit time *<select name="Please choose visit time" required defaultValue=""><option value="" disabled>Select a time</option><option>09AM - 10AM</option><option>10AM - 11AM</option><option>11AM - 12PM</option><option>12PM - 01PM</option><option>01PM - 02PM</option><option>02PM - 03PM</option></select></label>}
      <label className="wide">Message<textarea name="Message" maxLength={180} required /></label>
      <button disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send Message'}</button>
      {status === 'error' && <p role="alert">We could not send your message. Please try again.</p>}
    </form>
  );
}
