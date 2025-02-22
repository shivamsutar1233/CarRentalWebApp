import React, { useState } from "react";
import Search from "../common/Search";
import StyledCard, { CardLoading } from "../common/Card";
import { useNavigate } from "react-router";
import CreateEditCarModal from "./CreateEditCarModal";
import CreateEditCar from "./CreateEditCar";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useSelector } from "react-redux";
import { userRoles } from "../../util/UIConstants";
const CarsLayout = ({
  isLoading,
  data,
  open = false,
  setOpen = () => {},
  handleClose = () => {},
  title = "",
}) => {
  const navigate = useNavigate();
  const roles = useSelector(
    (state) => state?.globalState?.userPreferences?.roles
  );
  const [searchText, setSearchText] = useState("");
  const [filtredCars, setFilteredCars] = useState([]);
  // const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [carId, setCarId] = useState(null);
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
    data?.map((car) => {
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

  const onEditCarClick = (id) => {
    setIsEdit(true);
    setOpen(true);
    setCarId(id);
  };

  const getCard = (car) => {
    return (
      <section
        className=" col-span-12  sm:col-span-6 lg:col-span-4 xl:col-span-3"
        key={car.id}
      >
        <StyledCard
          car={car}
          key={car?.id}
          handleBooking={handleBooking}
          onEditCarClick={onEditCarClick}
        />
      </section>
    );
  };
  return (
    <React.Fragment>
      <section className="py-6 flex items-end justify-between">
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
          onChange={handleSearchChange}
          onEnter={handleSearch}
          onClear={handleSearchClear}
        />
        {(roles?.includes(userRoles.admin) ||
          roles?.includes(userRoles.owner)) && (
          <Button
            startIcon={<AddCircleOutlineIcon fontSize="inherit" />}
            onClick={() => {
              setIsEdit(false);
              setOpen(true);
            }}
            sx={{ textTransform: "none" }}
            size="small"
          >
            Add Car
          </Button>
        )}
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
      {open && (
        <CreateEditCarModal
          open={open}
          setOpen={setOpen}
          isEdit={isEdit}
          carId={carId}
          title={isEdit ? "Edit car" : "Add car"}
          handleClose={handleClose}
        />
      )}
    </React.Fragment>
  );
};

export default CarsLayout;
