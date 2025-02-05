import { cn } from "@/shared/lib/utils";
import { TextShimmer } from "@/shared/ui/text-shimmer";

function GeneratingNotification({ className }: { className?: string }) {
  return (
    <TextShimmer
      className={cn("ml-[3.4rem] mb-5 mt-1", className)}
      duration={1}
    >
      Генерация ответа...
    </TextShimmer>
  );
}

export default GeneratingNotification;
