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
