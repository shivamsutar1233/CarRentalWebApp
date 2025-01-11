import { IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const CarImagePreview = ({ files, setFiles }) => {
  return (
    files?.length > 0 && (
      <section className="grid grid-cols-12 gap-2">
        {files?.map((file) => {
          return (
            <a
              href={file?.url}
              target="_blank"
              key={file.pathname}
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 2xl:col-span-1 relative"
            >
              <img src={file?.url} height={"250px"} width={"250px"} />
              <section className=" absolute top-0 right-0">
                <IconButton
                  onClick={() =>
                    setFiles((prev) => prev.filter((f) => f.url !== file?.url))
                  }
                >
                  <CancelIcon />
                </IconButton>
              </section>
            </a>
          );
        })}
      </section>
    )
  );
};

export default CarImagePreview;
