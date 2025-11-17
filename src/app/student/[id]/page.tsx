import { studentData } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AnalysisSection } from "./components/AnalysisSection";
import CredentialCard from "./components/CredentialCard";

export default async function StudentProfilePage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the student data based on the id
  if (params.id !== studentData.id) {
    notFound();
  }

  const student = studentData;

  return (
    <div className="container py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-20">
            <div className="flex flex-col items-center text-center">
              <Image
                src={student.avatarUrl}
                alt={student.name}
                width={128}
                height={128}
                className="rounded-full mb-4 border-4 border-primary/20"
                data-ai-hint="woman portrait"
              />
              <h1 className="text-3xl font-bold font-headline">{student.name}</h1>
              <p className="text-muted-foreground mt-2">{student.bio}</p>
            </div>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <AnalysisSection credentials={student.credentials}>
            {(highlightedCredentials) => (
              <div>
                <h2 className="text-2xl font-bold mb-6 font-headline">Verifiable Credentials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {student.credentials.map((credential) => (
                    <CredentialCard
                      key={credential.id}
                      credential={credential}
                      isHighlighted={
                        highlightedCredentials.some(hc => credential.title.includes(hc)) ||
                        highlightedCredentials.some(hc => hc.includes(credential.title))
                      }
                    />
                  ))}
                </div>
              </div>
            )}
          </AnalysisSection>
        </div>
      </div>
    </div>
  );
}
