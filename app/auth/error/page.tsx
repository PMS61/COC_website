export default function AuthError() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Access Denied</h1>
        <p className="mt-4 text-gray-600">
          This application is only available for VJTI students with @vjti.ac.in email addresses.
        </p>
      </div>
    </div>
  );
}