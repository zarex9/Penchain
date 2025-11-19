'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { studentData } from '@/lib/data';
import type { Credential } from '@/lib/types';
import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ShieldCheck, ShieldX, Terminal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';

export default function VerifyPage() {
  const [credentialId, setCredentialId] = useState('');
  const [foundCredential, setFoundCredential] = useState<Credential | null | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = () => {
    setIsLoading(true);
    setFoundCredential(undefined);

    // Simulate a network request
    setTimeout(() => {
      const allCredentials = studentData.credentials;
      const credential = allCredentials.find((c) => c.id === credentialId);
      setFoundCredential(credential || null);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="container max-w-2xl py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold font-headline">Verify a Credential</h1>
          <p className="text-muted-foreground mt-2">
            Enter a credential ID to verify its authenticity on the Penchain network.
          </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex w-full items-end space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="credential-id">Credential ID</Label>
              <Input
                id="credential-id"
                placeholder="e.g., cred-001"
                value={credentialId}
                onChange={(e) => setCredentialId(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
              />
            </div>
            <Button onClick={handleVerify} disabled={isLoading || !credentialId}>
              {isLoading ? 'Verifying...' : 'Verify'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8">
        {isLoading && <p className="text-center text-muted-foreground">Checking the chain...</p>}
        {foundCredential && (
          <Alert variant="default" className="border-green-500 bg-green-50 dark:bg-green-950">
             <ShieldCheck className="h-4 w-4 text-green-500" />
            <AlertTitle className="text-green-700 dark:text-green-400">Verification Successful</AlertTitle>
            <AlertDescription>
                <Card className="mt-4 overflow-hidden shadow-none border-green-200 dark:border-green-800">
                    <CardHeader className="flex-row items-start gap-4 space-y-0 p-4">
                        <Image
                            src={foundCredential.issuerLogoUrl}
                            alt={`${foundCredential.issuer} logo`}
                            width={40}
                            height={40}
                            className="rounded-lg border"
                            data-ai-hint="logo building"
                        />
                        <div className="flex-1">
                            <CardTitle className="text-md font-headline">{foundCredential.title}</CardTitle>
                            <CardDescription>{foundCredential.issuer}</CardDescription>
                        </div>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                         <Badge variant="secondary">{foundCredential.issueDate}</Badge>
                    </CardFooter>
                </Card>
            </AlertDescription>
          </Alert>
        )}
        {foundCredential === null && (
           <Alert variant="destructive">
            <ShieldX className="h-4 w-4" />
            <AlertTitle>Verification Failed</AlertTitle>
            <AlertDescription>
              The credential ID "{credentialId}" could not be found or is invalid.
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
}
