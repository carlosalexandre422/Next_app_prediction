export default function Name({ params }: any) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-batween p-24">
        {params.name}
      </main>
    );
  }
  