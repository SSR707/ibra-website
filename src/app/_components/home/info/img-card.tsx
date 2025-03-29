export const ImgCard = ({ img }: { img: string }) => {
  return (
    <div className="h-[420px] w-full lg:w-[400px]  md:h-[600px] ">
      <img
        className="w-full h-full object-cover rounded-[15px] "
        src={img}
        alt=""
      />
    </div>
  );
};
