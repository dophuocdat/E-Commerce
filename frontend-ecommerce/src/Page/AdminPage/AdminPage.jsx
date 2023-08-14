import { Tab, TabList, Tabs } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const navigate = useNavigate();

  const tabs = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Users",
      path: "/admin/users",
    },
    {
      name: "Products",
      path: "/admin/products",
    },
    {
      name: "Report",
      path: "/admin/Report",
    },
  ];

  return (
    <div className="h-screen">
      <Tabs isFitted variant="soft-rounded" colorScheme="green">
        <TabList>
          {tabs.map((tab) => (
            <Tab
              key={tab.path}
              as={Link}
              to={tab.path}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </Tab>
          ))}
        </TabList>
        <div>
          {activeTab === "Dashboard" && <div>Dashboard</div>}
          {activeTab === "Products" && <AddProduct />}
          {activeTab === "Users" && <div>Users</div>}
          {activeTab === "Report" && <div>Report</div>}
        </div>
      </Tabs>
    </div>
  );
};

export default AdminPage;
