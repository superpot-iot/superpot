"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CurrentReadingsProps {
  light: number;
  moist: number;
  lidStat: boolean;
}

export default function CurrentReadings(curRead: CurrentReadingsProps) {
  return (
    <Card className="curr-read-card w-1/4 border border-green-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-1 font-normal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="current color"
            className="size-5"
          >
            <path d="M10 3.75a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM17.25 4.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM5 3.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM4.25 17a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM17.25 17a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM9 10a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5A.75.75 0 0 1 9 10ZM17.25 10.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM10 16.25a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
          </svg>
          Current Readings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-10 p-10 rounded-lg">
          <div className="flex flex-col items-center space-y-2 flex-1">
            <img
              src="/img/light_sensor.png"
              alt="light sensor icon"
              className="w-20 h-20"
            />
            <h2 className="text-xl font-bold">Light Sensor</h2>
            <p className="text-xl">{curRead.light} lux</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img
              src="/img/moisture_sensor.png"
              alt="moisture sensor icon"
              className="w-20 h-20"
            />
            <h2 className="text-xl font-bold">Moisture Sensor</h2>
            <p className="text-xl">{curRead.moist} %</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img src="/img/open_lid.png" alt="lid icon" className="w-20 h-20" />
            <h2 className="text-xl font-bold">Lid Status</h2>
            <p className="text-xl">{curRead.lidStat ? "Open" : "Closed"}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}