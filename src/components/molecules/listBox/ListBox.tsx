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

interface ListBoxProps {
  placeholderText?: string;
  searchTextOnChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => any;
  searchValue: string;
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
    height: 25,
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

const ListBox: React.FC<ListBoxProps> = (props) => {
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
            {listData.map((el, index) => (
              <Typography
                component="div"
                key={index}
                classes={{ root: styling.items }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      checked={isChecked(el)}
                      onChange={(e, checked) => checkBoxSelection(el, checked)}
                    />
                  }
                  classes={{ label: styling.itemLabel }}
                  label={el}
                />
              </Typography>
            ))}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ListBox;
