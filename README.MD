# DIGMIN-2025 Conference Website

Official website and registration platform for the **DIGMIN-2025 International Conference on "Digital Intelligence for Green Mining and Industrial Networks"**, organized by the Department of Mining Engineering, IIT (ISM) Dhanbad.

**Conference Dates:** September 12–13, 2025
**Venue:** GJLT, IIT-ISM Dhanbad, India

## Live Website

https://international-conference-digimin-2025.vercel.app/

## Project Structure

```text
international-conference-digimin-2025/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── about/
│   │   │   ├── agenda/
│   │   │   ├── callforpapers/
│   │   │   ├── committee/
│   │   │   ├── gallery/
│   │   │   ├── importantdates/
│   │   │   ├── registration/
│   │   │   ├── sponsorshiptiers/
│   │   │   ├── speakers/
│   │   │   ├── themes/
│   │   │   └── page.js
│   │   ├── components/
│   │   └── constants/
│   └── package.json
│
└── registrationForm/
    ├── src/
    │   └── app/
    │       ├── api/
    │       │   ├── sendmail/
    │       │   └── validateEmail/
    │       ├── RegistrationForm.jsx
    │       └── page.js
    └── package.json
```

## Features

### Conference Website

* Responsive conference website built using Next.js and React.
* Dedicated pages for:

  * About
  * Themes
  * Agenda
  * Call for Papers
  * Important Dates
  * Committee
  * Speakers
  * Gallery
  * Sponsorship Tiers
  * Registration
* Animated navigation and page sections using Framer Motion.
* Responsive mobile navigation with active-route highlighting.
* Animated hero section with conference information, venue and registration links.
* Conference countdown timer.
* Organizer and sponsor sections.
* Conference information and content maintained through centralized constants.

### Registration Platform

* Dedicated registration application integrated with the main conference website.
* Registration form collects:

  * Full Name
  * Affiliation
  * Email
  * Phone Number
  * Abstract submission status
  * Author Name
  * Abstract Title
  * Registration Category
  * Payment Confirmation ID
  * Payment Date
* Conditional rendering of abstract-related fields when an abstract is submitted.
* Client-side validation for required fields.
* Email validation through:

  * Email syntax checking
  * DNS MX-record verification
* Registration submission through Next.js API routes.
* Registration details are sent to configured recipients using Nodemailer and Gmail SMTP.
* Success and error feedback displayed using React Toastify.
* Animated form interactions using Framer Motion.

## Tech Stack

### Frontend

* Next.js 15
* React 19
* Tailwind CSS
* Framer Motion
* Lucide React

### Registration Application

* Next.js 15
* React 19
* Tailwind CSS
* Framer Motion
* Axios
* Nodemailer
* React Toastify
* Node.js DNS API

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/anirban2005143a/international-conference-digimin-2025.git
cd international-conference-digimin-2025
```

### 2. Run the Conference Website

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at:

```text
http://localhost:3000
```

### 3. Run the Registration Application

Open another terminal:

```bash
cd registrationForm
npm install
npm run dev
```

The registration application will run on the local Next.js development server.

## Environment Variables

The registration application uses the following environment variables for sending registration emails:

```env
SENDING_MAIL=your-gmail-address
SENDING_MAIL_PASSKEY=your-gmail-app-password
SEND_MAIL_TO=recipient1@example.com,recipient2@example.com
```

Do not commit real credentials to the repository.

## Registration API

### Validate Email

```text
POST /api/validateEmail
```

Checks email format and verifies whether the email domain contains MX records.

### Send Registration

```text
POST /api/sendmail
```

Accepts the registration form data and sends the submitted details to the configured recipient email addresses using Nodemailer.

## Deployment

The conference frontend is deployed on Vercel.

To create a production build:

```bash
npm run build
npm run start
```

## Conference Themes

The website includes the following major conference themes:

* Digital Foundations for Smart Mining
* Robotics & Automation in Harsh Environments
* Edge AI & Real-Time Analytics
* AI-Driven Mineral Intelligence
* Digital Resilience & Disaster Management
* Energy Efficiency & Process Optimization

## License

This project is intended for the DIGMIN-2025 conference website and registration system.
