import React from "react";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import InputAdorment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { List, ListRowRenderer, AutoSizer } from "react-virtualized";

interface ListBoxWithVirtualizedProps {
  placeholderText?: string;
  searchTextOnChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => any;
  searchValue?: string;
  listData: Array<string>;
  selectedData: Array<string>;
  checkBoxSelection: (value: string, state: boolean) => void;
}

const cssStyling = makeStyles((theme) => ({
  resultsWrapper: {
    height: 250,
    maxHeight: 300,
    overflowY: "auto",
  },
  items: {
    display: "flex",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: 9,
    paddingRight: 9,
    textAlign: "left",
    borderBottom: "1px solid rgb(151, 151, 151)",
  },
  itemLabel: {
    maxWidth: 230,
    whiteSpace: "pre",
    overflowX: "hidden",
    textOverflow: "ellipsis",
  },
}));

const ListBoxWithVirtualized: React.FC<ListBoxWithVirtualizedProps> = (
  props
) => {
  const styling = cssStyling();

  const {
    placeholderText,
    searchTextOnChange,
    searchValue,
    listData,
    selectedData,
    checkBoxSelection,
  } = props;

  const isChecked = (value: string): boolean =>
    selectedData.indexOf(value) >= 0;

  const VirtualizedRender: ListRowRenderer = ({ key, index, style }) => {
    const data = listData[index];
    return (
      <Typography
        component="div"
        key={key}
        style={style}
        classes={{ root: styling.items }}
      >
        <FormControlLabel
          control={
            <Checkbox
              color="secondary"
              checked={isChecked(data)}
              onChange={(e, checked) => checkBoxSelection(data, checked)}
            />
          }
          classes={{ label: styling.itemLabel }}
          label={data}
        />
      </Typography>
    );
  };

  return (
    <Box>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Input
            placeholder={placeholderText}
            onChange={searchTextOnChange}
            value={searchValue}
            endAdornment={
              <InputAdorment position="end">
                <Search />
              </InputAdorment>
            }
          />
        </Grid>
        <Grid item>
          <Typography
            component="div"
            classes={{ root: styling.resultsWrapper }}
          >
            <AutoSizer>
              {({ height, width }) => (
                <List
                  rowCount={listData.length}
                  height={height}
                  width={width}
                  rowHeight={25}
                  rowRenderer={VirtualizedRender}
                />
              )}
            </AutoSizer>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ListBoxWithVirtualized;
