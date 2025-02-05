import QuestionScreen from "@/components/QuestionScreen";

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ questionId: string }>;
}) {
  const { questionId } = await params;

  return <QuestionScreen questionId={questionId} />;
}
