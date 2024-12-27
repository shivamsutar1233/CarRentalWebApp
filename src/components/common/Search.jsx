import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
const Search = ({ onEnter, onChange, searchText, setSearchText, onClear }) => {
  return (
    <section className="w-full sm:w-96">
      <FormControl variant="filled" className="w-full">
        <InputLabel htmlFo="search">Search</InputLabel>
        <FilledInput
          id="search"
          type={"text"}
          value={searchText}
          placeholder="Search your favourite car"
          onChange={(e) => onChange && onChange(e)}
          onKeyDown={(e) => e.key === "Enter" && onEnter && onEnter()}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={"search"}
                onClick={() => searchText !== "" && onClear && onClear()}
                edge="end"
              >
                {searchText !== "" &&
                searchText !== undefined &&
                searchText !== undefined ? (
                  <ClearIcon />
                ) : (
                  <SearchIcon />
                )}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </section>
  );
};

export default Search;
