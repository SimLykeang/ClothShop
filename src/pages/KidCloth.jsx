import Card from "../components/Card";
import { data } from "../Data/allProduct";

const KidCloth = () => {
  const kidData = data.filter((props) => props.category === "Kid's Cloth");
  return (
    <div className="flex flex-col gap-7 m-auto flex-wrap w-[90vw] mt-20 justify-center items-center mb-50">
      <h1 className="text-2xl font-(family-name:--font-poppin-extrabold) md:text-3xl lg:text-4xl">
        Kid's Cloth
      </h1>
      <div className="flex gap-7 flex-wrap justify-center items-center">
        {kidData.map((props) => (
          <Card {...props} key={props.id} />
        ))}
      </div>
    </div>
  );
};

export default KidCloth;
