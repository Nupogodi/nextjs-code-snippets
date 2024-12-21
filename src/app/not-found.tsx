import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { HomeIcon } from 'lucide-react';
import Link from 'next/link';

const NotFoundBackground = () => (
  <div className="absolute inset-0 -z-10">
    <div
      className="absolute inset-0"
      style={{
        background: `
          linear-gradient(to right, #80808012 1px, transparent 1px),
          linear-gradient(to bottom, #80808012 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px',
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background/90" />
  </div>
);

const DecorativeElements = () => (
  <>
    <div className="absolute -left-24 -top-24 size-40 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute -right-24 -top-24 size-40 rounded-full bg-secondary/5 blur-3xl" />
  </>
);

const NotFoundTitle = () => (
  <div className="relative">
    <h1 className="animate-text-gradient bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 bg-[length:200%_auto] bg-clip-text text-8xl font-extrabold text-transparent sm:text-9xl">
      404
    </h1>
    <div className="absolute -bottom-2 left-1/2 h-1 w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent blur-sm" />
  </div>
);

const HomeButton = () => (
  <Button
    asChild
    size="lg"
    variant="outline"
    className="group relative bg-background/5 backdrop-blur-sm transition-all duration-300 hover:bg-background/10 hover:shadow-[0_0_20px_rgba(96,165,250,0.2)]"
  >
    <Link href={ROUTES.HOME}>
      <span className="relative flex items-center gap-2">
        <HomeIcon className="size-4 transition-colors duration-300" />
        <span className="transition-colors duration-300">
          Return Home
        </span>
      </span>
    </Link>
  </Button>
);

export default function NotFound() {
  return (
    <div className="relative h-[calc(100dvh-3.5rem)] w-full overflow-hidden">
      <NotFoundBackground />

      <div className="container mx-auto flex h-full flex-col items-center justify-center">
        <div className="relative space-y-8 text-center">
          <DecorativeElements />
          <NotFoundTitle />

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground/90 sm:text-3xl">
              Oops! Page Not Found
            </h2>
            <p className="mx-auto max-w-[600px] text-base text-muted-foreground sm:text-lg">
              The page you're looking for seems to have wandered off into the digital void.
              Let's get you back on track!
            </p>
          </div>

          <div className="pt-4">
            <HomeButton />
          </div>
        </div>
      </div>
    </div>
  );
}
