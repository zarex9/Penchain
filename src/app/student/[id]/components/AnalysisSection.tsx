'use client';

import { useState, useTransition } from 'react';
import type { Credential } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { analyzeStudentCredentials } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Sparkles } from 'lucide-react';

interface AnalysisSectionProps {
  credentials: Credential[];
  children: (highlightedCredentials: string[]) => React.ReactNode;
}

export function AnalysisSection({ credentials, children }: AnalysisSectionProps) {
  const [jobDescription, setJobDescription] = useState('');
  const [highlighted, setHighlighted] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleAnalyze = () => {
    startTransition(async () => {
      const { relevantCredentials, error } = await analyzeStudentCredentials(
        jobDescription,
        credentials
      );

      if (error) {
        toast({
          variant: 'destructive',
          title: 'Analysis Failed',
          description: error,
        });
        setHighlighted([]);
        return;
      }
      
      const credentialsToHighlight = relevantCredentials.split('\n').map(c => c.replace(/^- /, '').trim()).filter(Boolean);
      setHighlighted(credentialsToHighlight);

      toast({
        title: 'Analysis Complete',
        description: 'Relevant credentials have been highlighted.',
      });
    });
  };
  
  const handleClear = () => {
    setJobDescription('');
    setHighlighted([]);
  };

  return (
    <div className="space-y-8">
      <Card className="bg-secondary/50 border-primary/20 border-dashed">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="text-accent w-6 h-6" />
            AI-Powered Resume Analysis
          </CardTitle>
          <CardDescription>
            Paste a job description below to automatically highlight the most relevant credentials from this student&apos;s portfolio.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-2">
            <Label htmlFor="job-description">Job Description</Label>
            <Textarea
              id="job-description"
              placeholder="e.g., 'Seeking a senior blockchain developer with experience in Solidity and React...'"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              rows={6}
            />
          </div>
          <div className="flex gap-2 mt-4">
            <Button onClick={handleAnalyze} disabled={isPending || !jobDescription}>
              {isPending ? 'Analyzing...' : 'Analyze'}
            </Button>
            {(highlighted.length > 0 || jobDescription) && (
                 <Button onClick={handleClear} variant="ghost" disabled={isPending}>
                    Clear
                </Button>
            )}
          </div>
        </CardContent>
      </Card>
      
      {children(highlighted)}
    </div>
  );
}
