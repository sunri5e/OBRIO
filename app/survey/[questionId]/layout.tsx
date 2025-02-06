import surveyConfig from "@/data/surveyConfig.json";
import Header from "@/components/Header";

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
  const isDisclaimer = question?.layout && question?.layout === "disclaimer";

  return (
    <div className={`app-l-main ${isDisclaimer ? "app-l-main--disclaimer" : ""}`}>
      <Header />
      <div className="app-l-container">{children}</div>
    </div>
  );
}
