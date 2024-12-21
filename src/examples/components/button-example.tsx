import { Button } from '@/components/ui/button';

export function ButtonExample() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="default">
        Default
      </Button>
      <Button variant="secondary">
        Secondary
      </Button>
      <Button variant="outline">
        Outline
      </Button>
      <Button variant="ghost">
        Ghost
      </Button>
      <Button variant="destructive">
        Destructive
      </Button>
    </div>
  );
}
