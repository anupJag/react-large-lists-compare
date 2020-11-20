import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { name } from "faker";
import ListBox from "../../molecules/listBox";
import useDebounce from '../../../hooks/useDebounce';

function NormalLoadWithPaged() {
  const [originalData, setOriginalData] = useState<Array<string>>([]);
  const [selectedDataWithSlice, setSelectedDataWithSlice] = useState<
    Array<string>
  >([]);
  const [searchValueWithSlice, setSearchValueWithSlice] = useState<string>("");

  const debouncedSearch = useDebounce(searchValueWithSlice);

  useEffect(() => {
    const tempData = [...Array(1000).keys()].map((key) => {
      return `${name.firstName(Number(Math.random() <= 0.5))} ${name.lastName(
        Number(Math.random() <= 0.5)
      )}`;
    });
    setOriginalData(tempData);
  }, []);

  const checkBoxSelectionWithSlice = (value: string, state: boolean) => {
    if (state) {
      setSelectedDataWithSlice((prevState) => [...prevState, value]);
    } else {
      setSelectedDataWithSlice((prevState) =>
        [...prevState].filter((el) => el !== value)
      );
    }
  };

   const firstPage =
   debouncedSearch !== null || debouncedSearch !== ""
       ? originalData
           .filter(
             (el) =>
               el.toLowerCase().indexOf(debouncedSearch.toLowerCase()) >= 0
           )
           .slice(0, 10)
       : originalData.slice(0, 10);
  
  return (
    <Box p={2}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography variant="h6">Normal Render with paged</Typography>
        </Grid>
        <Grid item>
          <ListBox
            listData={firstPage}
            searchValue={searchValueWithSlice}
            searchTextOnChange={(e) => setSearchValueWithSlice(e.target.value)}
            selectedData={selectedDataWithSlice}
            placeholderText="Search Paged Data"
            checkBoxSelection={checkBoxSelectionWithSlice}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default NormalLoadWithPaged
