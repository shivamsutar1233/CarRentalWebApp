import { useNavigate } from "react-router";
import StyledCard, { CardLoading } from "../components/common/Card";
import { useGetApplicationCarsQuery } from "../redux/api/CarApi";
import Search from "../components/common/Search";
import { useState } from "react";
import CarsLayout from "../components/Cars/CarsLayout";

const Cars = () => {
  const { isLoading, data } = useGetApplicationCarsQuery();

  return (
    <section className="pt-20 px-6 py-6">
      <CarsLayout data={data} isLoading={isLoading} />
    </section>
  );
};

export default Cars;
