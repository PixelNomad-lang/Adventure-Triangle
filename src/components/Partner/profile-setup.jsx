import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ProfileSetup() {
  const [profile, setProfile] = useState({ agencyName: '', phone: '', location: '', about: '' });
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to backend later
    router.push('/partner/create-adventure');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Set Up Your Agency Profile</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="agencyName" placeholder="Agency Name" className="border p-2 rounded" onChange={(e) => setProfile({ ...profile, agencyName: e.target.value })} />
        <input name="phone" placeholder="Phone" className="border p-2 rounded" onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
        <input name="location" placeholder="Main Location" className="border p-2 rounded" onChange={(e) => setProfile({ ...profile, location: e.target.value })} />
        <textarea name="about" placeholder="About Your Agency" rows="3" className="border p-2 rounded" onChange={(e) => setProfile({ ...profile, about: e.target.value })} />
        <button className="bg-green-600 text-white py-2 rounded">Continue</button>
      </form>
    </div>
  );
}
