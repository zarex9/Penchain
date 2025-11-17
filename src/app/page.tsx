import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Cpu, FileText, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-20 md:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
              The Future of Verifiable Credentials
            </h1>
            <p className="text-muted-foreground md:text-xl">
              CredenceChain allows universities and bootcamps to mint educational credentials as NFTs, providing students with tamper-proof certificates and employers with instant verification.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button asChild size="lg">
                <Link href="/student/1">View Demo Resume</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/verify">Verify a Certificate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="flex flex-col items-center text-center p-6">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Cpu className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Certificate Minting</CardTitle>
                <CardDescription>
                  Educational institutions can mint degrees and skill certificates as unique, non-fungible tokens (NFTs) on the blockchain, ensuring their immutability.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex flex-col items-center text-center p-6">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Instant Verification</CardTitle>
                <CardDescription>
                  Employers can instantly verify the authenticity of any credential by checking its validity on-chain, eliminating fraud and lengthy background checks.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex flex-col items-center text-center p-6">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>AI-Powered Resume Analysis</CardTitle>
                <CardDescription>
                  Our AI tool parses job descriptions and automatically highlights the most relevant credentials from a student's portfolio, bridging the gap between skills and opportunities.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

       <section className="w-full py-20 md:py-32 bg-secondary/50">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Secure Your Future?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore a student's verified portfolio or mint your first credential today.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
             <Button asChild size="lg">
                <Link href="/mint">Start Minting</Link>
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
