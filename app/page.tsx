import VehicleItem from "@/components/VehicleItem";
import { vehicles } from "@/lib/vehicles";

export default function Home() {
  return (
    <main className="m-8">
      <h1 className="text-3xl font-bold mb-8">VGCS: Frontend - Code Test</h1>
      <div className="grid grid-cols-3 gap-3">
        {vehicles.map((vehicle) => (
          <VehicleItem key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </main>
  );
}
