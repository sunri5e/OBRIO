import surveyConfig from "@/data/surveyConfig.json";

export function generateStaticParams() {
  return surveyConfig.questions.map((q: { id: string }) => ({ questionId: q.id }));
}

export default async function QuestionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ questionId: string }>;
}) {
  const { questionId } = await params;
  const question = surveyConfig.questions.find((q: { id: string }) => q.id === questionId);
  const layoutColor = question?.layout && question?.layout === "disclaimer" ? "#6a3aa2" : "#fff0f0";

  return (
    <section
      style={{
        backgroundColor: layoutColor,
        height: "100vh",
      }}
    >
      {children}
    </section>
  );
}
