# Penchain

Penchain is a modern platform for issuing, managing, and verifying educational and professional credentials using blockchain technology. It provides a secure and privacy-preserving way for institutions to issue verifiable credentials, for learners to own and share achievements, and for employers to validate authenticity instantly.

## ✨ Features

*   **Verifiable Credentials**: Institutions can issue tamper-resistant credentials backed by on-chain proofs, ensuring portability and trust.
*   **Instant Verification**: Employers and third parties can verify credential authenticity in seconds, reducing manual checks and fraud.
*   **AI-Assisted Matching**: An optional AI tool helps match credentials to job descriptions and highlights the most relevant qualifications.
*   **User Ownership & Privacy**: Learners retain control over which credentials they share while preserving privacy.

## 🚀 Tech Stack

This project is built with a modern, component-based architecture:
*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
*   **Generative AI**: [Genkit](https://firebase.google.com/docs/genkit)

## Getting Started

1.  **Install dependencies**:

    ```bash
    npm install
    ```

2.  **Run the development server**:

    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:9002`.

## 📄 Pages

*   **/ (Home)**: Landing page introducing the Penchain platform and its features.
*   **/student/[id]**: Demo student/resume page showcasing a portfolio of verifiable credentials and AI matching tools.
*   **/mint**: Form for authorized issuers to create and issue a new credential on-chain.
*   **/verify**: Utility to check a credential's authenticity by ID.
# CredenceChain

CredenceChain is a modern platform for issuing, managing, and verifying educational and professional credentials using blockchain technology. It provides a secure and transparent way for institutions to mint credentials as Non-Fungible Tokens (NFTs), for students to own and share their achievements, and for employers to instantly verify their authenticity.

## ✨ Features

*   **Verifiable Credentials**: Universities and bootcamps can mint educational credentials as NFTs, providing students with tamper-proof certificates.
*   **Instant Verification**: Employers can instantly verify the authenticity of any credential by checking its validity on-chain, eliminating fraud and lengthy background checks.
*   **AI-Powered Resume Analysis**: An AI tool parses job descriptions and automatically highlights the most relevant credentials from a student's portfolio.
*   **Decentralized Ownership**: Students have full ownership and control over their digital credentials.

## 🚀 Tech Stack

This project is built with a modern, component-based architecture:

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
*   **Generative AI**: [Genkit](https://firebase.google.com/docs/genkit)

## Getting Started

To get the application running locally, follow these steps:

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:9002`.

## 📄 Pages

*   **/ (Home)**: The landing page introducing the CredenceChain platform and its core features.
*   **/student/[id]**: A demo student resume page showcasing a portfolio of verifiable credentials. This page includes the AI analysis tool for matching credentials to a job description.
*   **/mint**: A form for authorized institutions to issue or "mint" a new credential as an NFT.
*   **/verify**: A utility to check the authenticity of a credential by entering its unique ID.
