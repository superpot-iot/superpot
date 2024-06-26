import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
const DialogComponents = [
  {
    trigger: "Soil Sensor",
    img: "/img/soil_moisture_sensor.png",
    desc: "Sensor which measures the current moisture of the soil for remote monitoring.",
    title: "Soil Moisture Sensor",
  },
  {
    trigger: "Light Sensor",
    img: "/img/light_sensor_new.png",
    desc: "Sensor which detects the intensity of incoming sunlight in front of the greenhouse enclosure. Depending on the level of light intensity, the motorized hinge mechanism will trigger to open or close.",
    title: "Light Intensity Illumination Sensor",
  },
  {
    trigger: "Servo Motor",
    img: "/img/servo_motor_new.png",
    desc: "Actuator which motorizes the hinge mechanism of the device, enabling the opening and closing of the greenhouse enclosure.",
    title: "Servo Motor",
  },
  {
    trigger: "Water Pump",
    img: "/img/water_pump_new.png",
    desc: "Actuator which enables water delivery from the reservoir to the watering mechanism of the greenhouse enclosure.",
    title: "12V R385 Water Pump",
  },
  {
    trigger: "ESP8266",
    img: "/img/esp8266_new.png",
    desc: "The brain of the SuperPot that contains the ESP8266 Microcontroller which provides processing power, memory, I/O capabilities, and Integrated Wi-Fi.",
    title: "WeMosD1 - ESP8266 Microcontroller",
  },
];
export default function ProductDesc() {
  return (
    <Card className="bg-slate-950 border border-slate-800 basis-1/2">
      <CardHeader>
        <CardTitle className="flex items-center gap-1 font-normal ">
          <span className="krona_one text-sgreen">Components</span>
        </CardTitle>
        <CardDescription className="text-white text-md text-gray-400">
          Click on each component to learn more about the SuperPot!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <img src="/img/actual_superpot.png" alt="SuperPot" className = "w-[300px]" />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {DialogComponents.map((component) => (
            <ComponentDialog
              key={component.trigger}
              trigger={component.trigger}
              img={component.img}
              desc={component.desc}
              title={component.title}
            />
          ))}
          <Scene />
        </div>
      </CardContent>
    </Card>
  );
}

const ComponentDialog = ({ trigger, img, desc, title } : {trigger: string, img: string, desc: string, title: string}) => (
  <Dialog>
    <DialogTrigger
      style={{
        color: "white",
      }}
      className = "bg-slate-700 rounded-full px-3 py-2 hover:bg-slate-800 text-sm transition duration-300 ease-in-out"
    >
      {trigger}
    </DialogTrigger>
    <DialogContent className = "flex flex-col items-center rounded-lg border-slate-800 bg-gradient-to-b from-[#7ED957]/30 to-25% to-transparent">
      <Image src={img} alt="product" width = {300} height = {300}/>
      <DialogHeader>
        <DialogTitle className="krona_one text-sgreen">{title}</DialogTitle>
        <DialogDescription className = "text-gray-400">{desc}</DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

const Scene = () => (
  <Dialog>
    <DialogTrigger
      className = "bg-sgreen rounded-full px-3 py-2 hover:bg-sdgreen text-slate-950 hover:text-white text-sm transition duration-300 ease-in-out"
    >
      View Scene
    </DialogTrigger>

    <DialogContent className = "flex flex-col items-center rounded-lg border-slate-800 bg-gradient-to-b from-[#7ED957]/30 to-25% to-transparent">
      <video className="w-[95%] mt-6 rounded-lg" autoPlay loop muted>
        <source src="/vid/3dmodelvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <DialogHeader>
        <DialogTitle className="krona_one text-sgreen">View Scene</DialogTitle>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);
