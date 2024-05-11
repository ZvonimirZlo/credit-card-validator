# Credit Card Validator

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)

## About The App

<h4>Live demo: <a href='https://credit-card-validator-z.netlify.app'>credit-card-validator-z.netlify.app</a></h4>

Credit card checker web application. Enter your credit/debit card number in the input field and press "Enter" or click on the **`chip`**.
This app uses Luhn algorithm to validate card number. This app also checks credit/debit card brand (for example if the first integer of the card number is 4, card brand is "Visa") and card number length (it can't be below 13 or above 19).  The Luhn algorithm or Luhn formula, also known as the "modulus 10" or "mod 10" algorithm, named after its creator, IBM scientist Hans Peter Luhn, is a simple check digit formula used to validate a variety of identification numbers.

The Luhn algorithm is used in a variety of systems, including:

- Credit card numbers
- IMEI numbers
- National Provider Identifier numbers in the United States
- Canadian social insurance numbers
- Israeli ID numbers
- South African ID numbers
- South African Tax reference numbers
- Swedish national identification numbers
- Swedish Corporate Identity Numbers (OrgNr)
- Greek Social Security Numbers (ΑΜΚΑ)
- ICCID of SIM cards
- European patent application numbers
- Survey codes appearing on McDonald's, Taco Bell, and Tractor Supply Co. receipts
- United States Postal Service package tracking numbers use a modified Luhn algorithm

How it works:

<ol>
  <li>Starting from the farthest digit to the right, AKA the check digit, iterate to the left</li>
  <li>As you iterate to the left, every other digit is doubled (the check digit is not doubled), if the number is greater then 9 after doubling, substract 9 from it's value</li>
  <li>Sum up all the digits in the credit card number</li>
  <li>If the modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it's invalid</li>
</ol>

## Screenshots
<p>
<img src='https://github.com/ZvonimirZlo/credit-card-validator/assets/104101182/256b002e-265c-4d2e-a1b9-514b10890b31' width="400">
</p>

## Technologies
I've used `Css`, `Html`, `JavaScript` and `Tilt.js`.

## Setup
- open live demo app on the link above, or:
- download or clone the repository
- open it with Live Server (or some other extension like Live Preview, it's up to you)


