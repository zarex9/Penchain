'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Cpu } from 'lucide-react';

const mintFormSchema = z.object({
  studentId: z.string().min(1, 'Student ID is required.'),
  certificateTitle: z.string().min(5, 'Certificate title must be at least 5 characters.'),
  courseDetails: z.string().optional(),
  issueDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format.',
  }),
});

type MintFormValues = z.infer<typeof mintFormSchema>;

export default function MintPage() {
  const { toast } = useToast();
  const form = useForm<MintFormValues>({
    resolver: zodResolver(mintFormSchema),
    defaultValues: {
      studentId: '',
      certificateTitle: '',
      courseDetails: '',
      issueDate: new Date().toISOString().split('T')[0],
    },
  });

  function onSubmit(data: MintFormValues) {
    console.log('Minting certificate with data:', data);
    // In a real app, this would interact with a smart contract.
    toast({
      title: 'Minting Initiated',
      description: `Certificate "${data.certificateTitle}" is being minted for student ${data.studentId}.`,
    });
    form.reset();
  }

  return (
    <div className="container max-w-2xl py-12">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="w-6 h-6 text-primary"/>
            <CardTitle className="text-3xl font-headline">Mint a New Credential</CardTitle>
          </div>
          <CardDescription>
            Fill out the form below to issue a new verifiable credential on the blockchain. This action would typically be restricted to authorized institutions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="studentId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Student ID</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 0x123...abc" {...field} />
                    </FormControl>
                    <FormDescription>The unique identifier or wallet address of the student.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="certificateTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Certificate Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., B.Sc. in Computer Science" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="courseDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Details</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Provide a brief description of the course or achievement." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="issueDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Issue Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Minting..." : "Mint Certificate"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
