import { Navbar } from '@/components/layout/navbar/navbar';

export function NavbarExample() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="mb-4 text-2xl font-bold">Content Below Navbar</h2>
        <p className="text-muted-foreground">
          This example shows how the navbar stays fixed at the top while content
          scrolls underneath.
        </p>
      </div>
    </div>
  );
}
