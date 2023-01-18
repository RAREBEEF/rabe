import SkeletonProductTempCart from "./SkeletonProductTempCart";

const SkeletonProduct = () => {
  return (
    <div className="relative flex flex-col px-12 gap-12 xs:px-5">
      <div className="relative flex justify-evenly gap-5 sm:flex-col">
        <div className="basis-[50%] max-w-[500px] grow min-h-full aspect-square bg-zinc-100 rounded-lg" />
        <div className="basis-[45%] flex flex-col gap-3 text-right text-zinc-800 sm:text-left">
          <header className="flex flex-col gap-3">
            <div className="bg-zinc-100 rounded-lg h-10 w-48 self-end sm:self-start" />
            <div className="bg-zinc-100 rounded-lg h-6 w-24 self-end sm:self-start" />
            <div className="bg-zinc-100 rounded-lg h-7 w-32 self-end sm:self-start" />
            <div className="bg-zinc-100 rounded-lg h-5 w-24 self-end sm:self-start" />
          </header>
          <SkeletonProductTempCart />
        </div>
      </div>
      <div className="relative w-full h-fit pt-12 flex flex-col gap-3 border-t text-zinc-800">
        <div className="text-2xl font-semibold">제품 설명</div>
        <div className="bg-zinc-100 rounded-lg h-56 w-full" />
        <div className="bg-zinc-100 rounded-lg h-screen w-full" />
      </div>
    </div>
  );
};

export default SkeletonProduct;