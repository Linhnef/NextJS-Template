import { useTranslation } from "@/hooks/useTranslation";

const Home = () => {
  const translation = useTranslation();
  return (
    <div className="container">
      <div className="!w-full flex justify-center items-center flex-col">
        <h1>{translation.home.title}</h1>
      </div>
    </div>
  );
};

export default Home;
