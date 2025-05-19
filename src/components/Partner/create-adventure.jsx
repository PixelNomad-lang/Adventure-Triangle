import { useState } from 'react';
import { useRouter } from 'next/router';

export default function CreateAdventure() {
  const router = useRouter();
  const [adventure, setAdventure] = useState({
    title: '',
    price: '',
    date: '',
    location: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/partner/dashboard');
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Add Your First Adventure</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="title" placeholder="Title" className="border p-2 rounded" onChange={(e) => setAdventure({ ...adventure, title: e.target.value })} />
        <input name="price" placeholder="Price (₹)" type="number" className="border p-2 rounded" onChange={(e) => setAdventure({ ...adventure, price: e.target.value })} />
        <input name="date" type="date" className="border p-2 rounded" onChange={(e) => setAdventure({ ...adventure, date: e.target.value })} />
        <input name="location" placeholder="Location" className="border p-2 rounded" onChange={(e) => setAdventure({ ...adventure, location: e.target.value })} />
        <textarea name="description" placeholder="Description" rows="3" className="border p-2 rounded" onChange={(e) => setAdventure({ ...adventure, description: e.target.value })} />
        <button className="bg-green-600 text-white py-2 rounded">Save & Go to Dashboard</button>
      </form>
    </div>
  );
}
