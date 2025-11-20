import { CONFIG } from '@/global-config';
import { Circle } from '@/shared/components';
import Image from 'next/image';

function City() {
  return (
    <div className="absolute bottom-0 h-[200px] w-full sm:h-[300px] md:h-[400px]">
      <Image
        src="/assets/illustrations/city.svg"
        alt="city"
        className="object-cover"
        fill
      />
    </div>
  );
}

function Grid() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <Image
        alt="grid"
        src="/assets/illustrations/grid.svg"
        fill
        className="scale-[2] object-cover md:scale-[2.5]"
      />
    </div>
  );
}

export default function Introduction() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden p-4">
      <City />

      <div className="relative flex flex-col items-center justify-center md:-mt-32">
        <Grid />

        <Circle
          diameter="350px"
          className="bg-radial-orange-black blur-[100px]"
        />

        <h1 className="text-center font-silom text-5xl leading-relaxed sm:text-6xl sm:leading-relaxed md:text-7xl md:leading-normal">
          CE <br />
          Smart Career <br /> {CONFIG.date.years}
        </h1>
      </div>
    </div>
  );
}
