// app/page.tsx

import PieChart from "@/app/components/PieChart";



const Page: React.FC = () => {
  return (
    <div className="m-10">
      <h1 className="text-center text-xl font-bold mb-10">My Charts</h1>
      <PieChart />
    </div>
  );
};

export default Page;
