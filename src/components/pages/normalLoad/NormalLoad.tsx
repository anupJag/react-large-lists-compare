import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { name } from "faker";
import ListBox from "../../molecules/listBox";
import useDebounce from '../../../hooks/useDebounce';

const NormalLoad = () => {
  const [originalData, setOriginalData] = useState<Array<string>>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedData, setSelectedData] = useState<Array<string>>([]);

  const debouncedSearch = useDebounce(searchValue);

  useEffect(() => {
    const tempData = [...Array(1000).keys()].map(key => {
      return `${name.firstName(Number(Math.random() <= 0.5))} ${name.lastName(
        Number(Math.random() <= 0.5)
      )}`;
    });
    setOriginalData(tempData);
  }, []);

  const checkBoxSelection = (value: string, state: boolean) => {
    if (state) {
      setSelectedData(prevState => [...prevState, value]);
    } else {
      setSelectedData(prevState => [...prevState].filter(el => el !== value));
    }
  };

  const firstPageWithoutSlice =
    debouncedSearch !== null || debouncedSearch !== ""
      ? originalData.filter(
          el => el.toLowerCase().indexOf(debouncedSearch?.toLowerCase()) >= 0
        )
      : originalData;

  return (
    <Box p={2}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography variant="h6">Normal Render</Typography>
        </Grid>
        <Grid item>
          <ListBox
            listData={firstPageWithoutSlice}
            searchValue={searchValue}
            searchTextOnChange={e => setSearchValue(e.target.value)}
            selectedData={selectedData}
            placeholderText="Search"
            checkBoxSelection={checkBoxSelection}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NormalLoad;
