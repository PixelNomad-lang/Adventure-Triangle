export default function PartnerDashboard() {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <p className="text-gray-600 mb-4">Here you can manage your adventures, bookings, and agency details.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white shadow rounded">Total Adventures: 0</div>
        <div className="p-6 bg-white shadow rounded">Upcoming Bookings: 0</div>
      </div>
    </div>
  );
}
