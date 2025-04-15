import MobileLayout from './components/MobileLayout';
import AuthButton from './components/AuthButton';

export default function Home() {
  return (
    <MobileLayout>
      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="w-full max-w-md p-6">
          <h1 className="text-3xl font-bold text-center mb-8">ForkCast</h1>
          
          <div className="space-y-4">
            <AuthButton type="signin" href="/signin" />
            <AuthButton type="signup" href="/signup" />
          </div>
        </div>
      </main>
    </MobileLayout>
  );
}