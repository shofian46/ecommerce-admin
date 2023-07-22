import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: { storeId: string };
}
const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <div className="p-5 ml-3">Active Store: {store?.name}</div>;
};
export default DashboardPage;
