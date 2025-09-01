import { TestimonyType } from "@/_types/testimony/Testimony";
import Card from "@/components/ui/card";

type TestimonialsCardProps = Pick<TestimonyType, "name" | "comment">;

export default function TestimonialsCard({
  name,
  comment,
}: TestimonialsCardProps) {
  return (
    <Card className="bg-zinc-800/40 p-6 rounded-lg flex gap-4 items-start">
      <p className="text-zinc-400">{comment}</p>
      <div className="mt-4">
        <h4 className="font-bold text-white">{name}</h4>
      </div>
    </Card>
  );
}
