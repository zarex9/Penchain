'use client';

import Image from 'next/image';
import type { Credential } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

interface CredentialCardProps {
  credential: Credential;
  isHighlighted: boolean;
}

export default function CredentialCard({ credential, isHighlighted }: CredentialCardProps) {
  return (
    <Card
      className={cn(
        'flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
        isHighlighted && 'ring-2 ring-accent shadow-accent/20 shadow-lg'
      )}
    >
      <CardHeader className="flex-row items-start gap-4 space-y-0">
        <Image
          src={credential.issuerLogoUrl}
          alt={`${credential.issuer} logo`}
          width={48}
          height={48}
          className="rounded-lg border"
          data-ai-hint="logo building"
        />
        <div className="flex-1">
          <CardTitle className="text-lg font-headline">{credential.title}</CardTitle>
          <CardDescription>{credential.issuer}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{credential.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-sm">
        <Badge variant="outline">{credential.issueDate}</Badge>
        {isHighlighted && (
            <Badge variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <CheckCircle2 className="w-4 h-4 mr-1.5" />
                Recommended
            </Badge>
        )}
      </CardFooter>
    </Card>
  );
}
