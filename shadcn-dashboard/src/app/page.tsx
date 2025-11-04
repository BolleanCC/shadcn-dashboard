import AppBarChart from "@/components/AppBarChart";
import AppAreaChart from "@/components/AppAreaChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";
import NavigationCards from "@/components/NavigationCards";

const Homepage = () => {
  return (
    <div className="space-y-6">
      {/* Navigation Entry Points */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Quick Access</h2>
        <NavigationCards />
      </div>

      {/* Dashboard Analytics */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
          <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppBarChart /></div>
          <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Latest transactions" /></div>
          <div className="bg-primary-foreground p-4 rounded-lg"><AppPieChart /></div>
          <div className="bg-primary-foreground p-4 rounded-lg"><TodoList /></div>
          <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppAreaChart /></div>
          <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Popular Content" /></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
