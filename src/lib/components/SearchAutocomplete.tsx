import useQuery from "../hooks/useQuery";
import {
  Autocomplete,
  Checkbox,
  CircularProgress,
  TextField,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useDebounce } from "../hooks/useDebounce";

const icon: React.ReactElement = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

type SearchAutocompleteProps<R> = {
  disablePreload?: boolean;
  label: string;
  labelProp?: string;
  disabled?: boolean;
  multiple?: boolean;
  url: string;
  defaultValue?: R;
  debounceDelay?: number;
};

type SearchAutocompleteOutput<R> = {
  searchComponent: JSX.Element;
  isLoading: boolean;
  value: R;
};

/**
 * Takes a query and produces a backend filtered list of options
 */
function useSearchAutocomplete<T, R>(props: SearchAutocompleteProps<R>) {
  const {
    label,
    labelProp = "name",
    url,
    disabled = false,
    multiple = false,
    defaultValue = props.multiple ? [] : null,
    disablePreload = false,
    debounceDelay = 500,
  } = props;

  const [value, setValue] = useState<R>(defaultValue as R);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearch = useDebounce(searchTerm, debounceDelay);

  const toSafeUrlQueryParam = (str: string) => {
    return encodeURIComponent(str).replace(/%20/g, "+");
  };

  // We make the bold assumption our consumed endpoint uses our standard ?search= query param
  const { queryResult, transactionId, isLoading, exec } = useQuery<T[]>({
    url: `${url}?search=${toSafeUrlQueryParam(debouncedSearch)}`,
    defaultValue: [],
  });

  useEffect(() => {
    if (disablePreload) {
      exec();
    }
  }, [exec, disablePreload]);

  useEffect(() => {
    console.debug(`mounted SearchAutocomplete`);
  }, []);

  const searchComponent = useMemo(
    () => (
      <Autocomplete
        disabled={isLoading || disabled}
        multiple={multiple}
        disablePortal={false}
        id={`autocomplete-standard-${label}`}
        options={queryResult}
        isOptionEqualToValue={(option, value) =>
          option[labelProp] === value[labelProp]
        }
        renderOption={(props, option, { selected }) => {
          return multiple ? (
            <li {...props} key={`opt_${transactionId}_${option[labelProp]}`}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option[labelProp]}
            </li>
          ) : (
            <li {...props} key={`opt_${transactionId}_${option[labelProp]}`}>
              {option[labelProp]}
            </li>
          );
        }}
        getOptionLabel={(option) => option[labelProp]}
        sx={{ width: 300 }}
        onChange={(event, value) => {
          setValue(value as R);
        }}
        renderInput={(params) => (
          <TextField
            key={`autocomplete-standard-${label}-tf`}
            {...params}
            label={label}
            onChange={(event) => {
              if (!event?.target?.value) {
                // TODO: Should we clear the value here or set it to default?
                setValue(defaultValue as R);
                return;
              }
              setSearchTerm(event?.target?.value);
            }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {isLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    ),
    [
      disabled,
      isLoading,
      label,
      multiple,
      defaultValue,
      labelProp,
      queryResult,
      transactionId,
    ]
  );

  return {
    searchComponent,
    isLoading,
    value: value,
  } as SearchAutocompleteOutput<R>;
}

export default useSearchAutocomplete;
