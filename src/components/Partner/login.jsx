import { useState } from 'react';
import { useRouter } from 'next/router';

export default function PartnerLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call backend later
    router.push('/partner/subscribe');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg bg-white rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Partner Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="email" type="email" placeholder="Email" className="border p-2 rounded" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input name="password" type="password" placeholder="Password" className="border p-2 rounded" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Login</button>
      </form>
    </div>
  );
}
