import {
  CardBody,
  CardContainer,
  CardItem,
  useMouseEnter,
} from './core/project-grid';

export const Home = () => {
  return (
    <div className="h-[calc(100vh-5rem)] bg-bgorange relative">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-black rounded-full aspect-square h-[min(calc(100%-8rem),calc(100vw-8rem))]" />
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="container bg-bgorange text-center py-3 flex flex-col gap-1 sm:gap-2">
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-black font-Satoshi tracking-tighter">
            Creative Developer
          </h1>
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-Satoshi -tracking-tight uppercase">
            Based in Sri Lanka
          </h1>
        </div>
      </div>
    </div>
  );
};
