import StyledCard, { CardLoading } from "../components/common/Card";
import { useGetApplicationCarsQuery } from "../redux/api/CarApi";

const Cars = () => {
  const { isLoading, data } = useGetApplicationCarsQuery();

  const getCarsLoadingComponent = () => {
    const cards = [];
    for (let index = 0; index < 12; index++) {
      cards.push(
        <section
          className=" col-span-12  sm:col-span-6 lg:col-span-4 xl:col-span-3"
          key={index}
        >
          <CardLoading />
        </section>
      );
    }
    return cards;
  };
  return (
    <section className="pt-20 px-6 py-6">
      <section className="grid grid-cols-12 gap-10">
        {isLoading
          ? getCarsLoadingComponent()
          : data?.length > 0
          ? data.map((car) => (
              <section
                className=" col-span-12  sm:col-span-6 lg:col-span-4 xl:col-span-3"
                key={car.id}
              >
                <StyledCard car={car} key={car?.id} />
              </section>
            ))
          : "no records found"}
      </section>
    </section>
  );
};

export default Cars;
