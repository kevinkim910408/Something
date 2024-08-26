"use client";

import { EarthCanvas, FixedLight, Polaroid } from ".";
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";
import { TRAVEL_CONST } from "@/const";
import { travelCityNameState, travelPolaroidState } from "@/recoils";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Autoplay from "embla-carousel-autoplay";
import { useRecoilState, useRecoilValue } from "recoil";

export const Tab3D = ({
  setSelectedTab,
}: {
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [polaroidOpen, setPolaroidOpen] = useRecoilState(travelPolaroidState);
  const cityName = useRecoilValue(travelCityNameState);

  return (
    <div className="flex flex-col items-center w-full">
      <Dialog open={polaroidOpen} onOpenChange={setPolaroidOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center py-4">{cityName}</DialogTitle>
            <div className="flex justify-center">
              <Carousel
                className="w-11/12 max-w-7xl"
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 5000,
                  }),
                ]}
              >
                <CarouselContent>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/3">
                      <Polaroid
                        caption="Imz"
                        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6hImlC0JpmcgX3AG8lazZGy7Cp8yTHRD0w&s"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <div className="flex justify-center">
        <div className="hidden md:block w-[850px] h-[850px] ">
          <Canvas
            camera={{ fov: 25, near: 0.1, far: 100, position: [1, 4, 4] }}
          >
            <FixedLight />
            <EarthCanvas />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        <div className="flex flex-col items-center gap-2 md:hidden">
          <div>3D is only for PC or some tablets, please move to 2D</div>
          <Button
            className="w-32"
            onClick={() => setSelectedTab(TRAVEL_CONST["2D"])}
          >
            Go to 2D
          </Button>
        </div>
      </div>
    </div>
  );
};
