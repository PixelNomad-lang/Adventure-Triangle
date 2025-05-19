import { useRouter } from 'next/router';

export default function Subscribe() {
  const router = useRouter();

  const handleSubscribe = (plan) => {
    // Store subscription locally for now
    router.push('/partner/profile-setup');
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Choose a Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {['Monthly', 'Yearly'].map((plan) => (
          <div key={plan} className="border p-6 rounded shadow text-center">
            <h3 className="text-xl font-semibold">{plan} Plan</h3>
            <p className="my-4 text-gray-500">{plan === 'Monthly' ? '₹499/month' : '₹4999/year'}</p>
            <button onClick={() => handleSubscribe(plan)} className="bg-green-600 text-white px-4 py-2 rounded">
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
