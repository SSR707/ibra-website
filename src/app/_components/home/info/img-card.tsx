export const ImgCard = ({ img }: { img: string }) => {
  return (
    <div className="h-[400px] w-full lg:w-[400px]  md:h-[600px] ">
      <img
        className="w-full h-full object-cover rounded-[15px] "
        src={img}
        alt=""
      />
    </div>
  );
};
