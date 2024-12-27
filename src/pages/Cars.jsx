import { useNavigate } from "react-router";
import StyledCard, { CardLoading } from "../components/common/Card";
import { useGetApplicationCarsQuery } from "../redux/api/CarApi";
import Search from "../components/common/Search";
import { useState } from "react";

const Cars = () => {
  const { isLoading, data } = useGetApplicationCarsQuery(),
    navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [filtredCars, setFilteredCars] = useState([]);
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
  const handleSearch = () => {
    console.log("searching...->" + searchText);
    let tempList = [];
    data.map((car) => {
      if (
        car.model
          .toString()
          .toLowerCase()
          .includes(searchText.toLocaleLowerCase()) ||
        car.make
          .toString()
          .toLowerCase()
          .includes(searchText.toLocaleLowerCase())
      ) {
        tempList.push(car);
      }
    });
    setFilteredCars(tempList);
  };
  const handleSearchClear = () => {
    setFilteredCars([]);
    setSearchText("");
  };
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    handleSearch();
  };
  const handleBooking = (carId) => {
    navigate(`/BookCar?carId=${carId}`);
  };

  const getCard = (car) => {
    return (
      <section
        className=" col-span-12  sm:col-span-6 lg:col-span-4 xl:col-span-3"
        key={car.id}
      >
        <StyledCard car={car} key={car?.id} handleBooking={handleBooking} />
      </section>
    );
  };
  return (
    <section className="pt-20 px-6 py-6">
      <section className="py-6">
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
          onChange={handleSearchChange}
          onEnter={handleSearch}
          onClear={handleSearchClear}
        />
      </section>
      <section className="grid grid-cols-12 gap-y-5 sm:gap-10">
        {isLoading
          ? getCarsLoadingComponent()
          : data?.length > 0
          ? filtredCars.length > 0
            ? filtredCars.map((car) => getCard(car))
            : data.map((car) => getCard(car))
          : "no records found"}
      </section>
    </section>
  );
};

export default Cars;
