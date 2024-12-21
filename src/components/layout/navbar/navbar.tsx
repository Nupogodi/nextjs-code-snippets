import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { GithubIcon, MenuIcon } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href={ROUTES.HOME} className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Code Snippets</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href={ROUTES.DOCS.ROOT}
                className="text-foreground transition-colors hover:text-foreground/80"
              >
                Documentation
              </Link>
              <Link
                href={ROUTES.COMPONENTS.ROOT}
                className="text-foreground transition-colors hover:text-foreground/80"
              >
                Components
              </Link>
              <Link
                href={ROUTES.EXAMPLES.ROOT}
                className="text-foreground transition-colors hover:text-foreground/80"
              >
                Examples
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://github.com/Nupogodi/nextjs-code-snippets"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon className="size-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Toggle menu"
              >
                <MenuIcon className="size-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
