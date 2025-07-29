export default function AuthLayout({
  children,
}: React.AllHTMLAttributes<'main'>) {
  return (
    <main className="flex justify-center items-center w-full min-h-screen">
      {children}
    </main>
  )
}
