"use client";

import { equipments } from "@/lib/equipments";
import { Badge } from "./ui/badge";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "./MultiSelector";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function VehicleItem({ vehicle }: { vehicle: any }) {
  const [value, setValue] = useState<string[]>([]);

  useEffect(() => {
    setValue(
      vehicle.equipments?.map((id: any) => {
        const equipment = equipments.find((equipment) => equipment.id === id);
        return equipment?.name;
      }) || []
    );
  }, [vehicle.equipments]);

  return (
    <div key={vehicle.id} className="p-4 bg-gray-200 relative rounded">
      <Badge
        className={cn(
          "capitalize absolute top-4 right-4",
          vehicle.status === "inactive"
            ? "bg-red-100 text-red-600"
            : "bg-green-100 text-green-600"
        )}
      >
        {vehicle.status}
      </Badge>
      <p>
        Name: <b>{vehicle.name === "" ? "No name" : vehicle.name}</b>
      </p>
      <p>
        Driver: <b>{vehicle.driver}</b>
      </p>
      <p>
        Fuel Type: <b>{vehicle.fuelType}</b>
      </p>
      <div>
        <p className="mt-4 uppercase text-xs font-bold">Equipments</p>
        <MultiSelector values={value} onValuesChange={setValue}>
          <MultiSelectorTrigger>
            <MultiSelectorInput placeholder="Select equipment" />
          </MultiSelectorTrigger>
          <MultiSelectorContent>
            <MultiSelectorList>
              {equipments.map((equipment) => (
                <MultiSelectorItem key={equipment.id} value={equipment.name}>
                  {equipment.name}
                </MultiSelectorItem>
              ))}
            </MultiSelectorList>
          </MultiSelectorContent>
        </MultiSelector>
      </div>
    </div>
  );
}

export default VehicleItem;
