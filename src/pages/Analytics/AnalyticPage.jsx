import React from "react";
import Layout from "../../layouts/Layout";
import Content from "./components/Content";
import Sidebar from "../../components/Sidebar";

function AnalyticPage({ blogs, categories, loading }) {
  return (
    <Layout>
      <div className="container relative mx-auto mt-12 mb-40">
        <div className="lg:flex flex-row flex-none relative z-10">
          <div className="lg:w-[75%] lg:mr-10 w-full">
            <Content
              blogs={blogs}
              loading={loading}
              categories={categories?.data}
            />
          </div>

          <div className="lg:w-[25%] ">
            <Sidebar />
          </div>
        </div>
        <div className="blur__bg-head lg:block md:block hidden"></div>
      </div>
      <div className="blur__bg overflow-hidden lg:block md:block hidden"></div>
    </Layout>
  );
}

export default AnalyticPage;
