'use client';

import React, { useEffect } from 'react'
import SectionHeading from '../components/general/SectionHeading'

const listStyle = { fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px' }

const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/about-banner.webp",
  pageTitle: "Terms & Conditions",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Terms & Conditions', href: '/terms-conditions' }
  ]
};

export default function TermsConditionsPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
  }, []);
    return (
      <section className='container mx-auto px-6 py-16'>
        <div className='text-center'>
          <SectionHeading 
            title="Terms & Conditions"
            subtitle=""
            titleClassName="text-center"
            subtitleClassName="text-center text-sm sm:text-base text-[var(--lite-sand)] max-w-3xl mx-auto"
          />
        </div>
        <div className='mt-8 text-justify'>
            <p className='text-sm'>
            The Terms and Conditions contained herein shall apply to any person (“User”) using the services of www.kalingauniversity.ac.in for making payments through an online payment gateway service (“Service”) offered by Kalinga University through its website, i.e., <a href="https://www.kalingauniversity.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.kalingauniversity.ac.in</a>. Each User is therefore deemed to have read and accepted these Terms and Conditions.
            </p>
            <h3 className='text-2xl pt-6'>General Terms and Conditions For E-Payment</h3>
                <ul className='list-disc list-inside' style={listStyle}>
                    <li>Each User accepts and agrees that the provision of details of his/ her use of the Website to regulators or police or to any other third party in order to resolve disputes or complaints which relate to the Website shall be at the absolute discretion of Kalinga University.</li>
                    <li>Each User agrees that he/ she shall not use the Website for any illegal or unauthorized purpose.</li>
                    <li>Each User agrees that he/ she shall not use the Website for any purpose that is unlawful or prohibited by these Terms and Conditions.</li>
                    <li>Each User agrees that he/ she shall not use the Website for any purpose that is unlawful or prohibited by these Terms and Conditions.</li>
                </ul>
        <h3 className='text-2xl pt-6'>Limitation of Liability</h3>
        <ul className='list-disc list-inside' style={listStyle}>
            <li>Kalinga University has made this Service available to the User as a matter of convenience. The University expressly disclaims any claim or liability arising out of the provision of this Service. The User agrees and acknowledges that he/ she shall be solely responsible for his/ her conduct and that the University reserves the right to terminate the rights to use the Service immediately without giving any prior notice thereof.</li>
            <li>Kalinga University and/or the Payment Service Providers shall not be liable for any inaccuracy, error, or delay in, or omission of (a) any data, information, or message, or (b) the transmission or delivery of any such data, information or message; or (c) any loss or damage arising from or occasioned by any such inaccuracy, error, delay or omission, non-performance or interruption in any such data, information or message. Under no circumstances shall the University and/or the Payment Service Providers, its employees, directors, and its third-party agents involved in processing, delivering, or managing the Services, be liable for any direct, indirect, 
                incidental, special, or consequential damages, or any damages whatsoever, including punitive or exemplary arising out of or in any way connected with the provision of or any inadequacy or deficiency in the provision of the Services or resulting from unauthorized access or alteration of transmissions of data or arising from suspension or termination of the Services.</li>
            <li>Kalinga University and the Payment Service Provider(s) assume no liability whatsoever for any monetary or other damage suffered by the User on account of:</li>
            <li>The delay, failure, interruption, or corruption of any data or other information transmitted in connection with the use of the Payment Gateway or Services in connection thereto; and/ or 2. Any interruption or errors in the operation of the Payment Gateway. The User shall indemnify and hold harmless the Payment Service Provider(s) and Kalinga University and their respective officers, directors, agents, and employees, from any claim or demand, or actions arising out of or in connection with the utilisation of the Services.</li>
            <li>The User agrees that Kalinga University or any of its employees will not be held liable by the User for any loss or damages arising from your use of, or reliance upon the information contained on the Website, or any failure to comply with these Terms and Conditions, where such failure is due to circumstances beyond Kalinga University’s reasonable control.</li>
        </ul>
        <h3 className='text-2xl pt-6'>Debit/Credit Card, Bank Account Details</h3>
         <p className='text-sm'>The User agrees that the debit/credit card details provided by him/ her for use of the aforesaid Service(s) must be correct and accurate and that the User shall not use a debit/credit card that is not lawfully owned by him/ her or the use of which is not authorised by the lawful owner thereof. The User further agrees and undertakes to provide correct and valid debit/credit card details.</p>
        <ul className='list-disc list-inside' style={listStyle}>
            <li>The User may make his/ her payment (any type of school fee) to Kalinga University by using a debit/credit card or through an online banking account.</li>
            <li>The User warrants, agrees, and confirms that when he/he initiates a payment transaction and/or issues an online payment instruction and provides his/her card/bank details.</li>
            <li>The User is fully and lawfully entitled to use such credit/debit card or bank account for such transactions.</li>
            <li>The User is responsible for ensuring that the card/ bank account details provided by him/ her are accurate.</li>
            <li>The User is authorising a debit of the nominated card/ bank account for the payment of any type of school fee.</li>
            <li>The User is responsible for ensuring sufficient credit is available on the nominated card/ bank account at the time of making the payment to permit the payment of the dues payable or the bill(s) selected by the User, inclusive of the applicable Fee.</li>
        </ul>
        <h3 className='text-2xl pt-6'>Refund Policy</h3>
        <p className='text-sm'>The User agrees that, to the extent required or permitted by law, Kalinga University and/ or the Payment Service Provider(s) may also collect, use and disclose personal information in connection with security-related or law enforcement investigations or in the course of cooperating with authorities or complying with legal requirements.</p>
        <ul className='list-disc list-inside' style={listStyle}>
            <li>The User agrees that any communication sent by the User via e-mail shall imply the release of information therein/ therewith to Kalinga University. The User agrees to be contacted via e-mail on such emails initiated by him/her.</li>
            <li>In addition to the information already in the possession of Kalinga University and/ or the Payment Service Provider(s), Kalinga University may have collected similar information from the User in the past. By entering the Website, the User consents to the terms of Kalinga University's information privacy policy and to our continued use of previously collected information. 
                By submitting the User's personal information to us, the User will be treated as having given his/her permission for the processing of the User's personal data as set out herein.</li>
            <li>The User acknowledges and agrees that his/ her information will be managed in accordance with the laws in force at the time.</li>
        </ul>
        <h3 className='text-2xl pt-6'>Payment Gateway Disclaimer</h3>
        <p className='text-sm'>The Service is provided in order to facilitate payment of Kalinga University online. Kalinga University or the Payment Service Provider(s) do not make any representation of any kind, express or implied, as to the operation of the Payment Gateway other than what is specified in the Website for this purpose. 
            By accepting/ agreeing to these Terms and Conditions, the User expressly agrees that his/ her use of the aforesaid online payment Service is entirely at the own risk and responsibility of the User.</p>
          </div>
      </section>


    )
  }