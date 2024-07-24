import React, { useState } from 'react'

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  Stack,
  Tooltip,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Controller, useForm } from "react-hook-form";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const countries = [
  {
    title: "Afghanistan",
    id: 0,
  },
  {
    title: "Armenia",
    id: 1,
  },
  {
    title: "Azerbaijan",
    id: 2,
  },
  {
    title: "Bahrain",
    id: 3,
  },
  {
    title: "Bangladesh",
    id: 4,
  },
  {
    title: "Bhutan",
    id: 5,
  },
  {
    title: "Brunei",
    id: 6,
  },
  {
    title: "Cambodia",
    id: 7,
  },
  {
    title: "China",
    id: 8,
  },
  {
    title: "Cyprus",
    id: 9,
  },
  {
    title: "Georgia",
    id: 10,
  },
  {
    title: "India",
    id: 11,
  },
  {
    title: "Indonesia",
    id: 12,
  },
  {
    title: "Iran",
    id: 13,
  },
  {
    title: "Iraq",
    id: 14,
  },
  {
    title: "Israel",
    id: 15,
  },
  {
    title: "Japan",
    id: 16,
  },
  {
    title: "Jordan",
    id: 17,
  },
  {
    title: "Kazakhstan",
    id: 18,
  },
  {
    title: "Kuwait",
    id: 19,
  },
  {
    title: "Kyrgyzstan",
    id: 20,
  },
  {
    title: "Laos",
    id: 21,
  },
  {
    title: "Lebanon",
    id: 22,
  },
  {
    title: "Malaysia",
    id: 23,
  },
  {
    title: "Maldives",
    id: 24,
  },
  {
    title: "Mongolia",
    id: 25,
  },
  {
    title: "Myanmar (Burma)",
    id: 26,
  },
  {
    title: "Nepal",
    id: 27,
  },
  {
    title: "North Korea",
    id: 28,
  },
  {
    title: "Oman",
    id: 29,
  },
  {
    title: "Pakistan",
    id: 30,
  },
  {
    title: "Palestine",
    id: 31,
  },
  {
    title: "Philippines",
    id: 32,
  },
  {
    title: "Qatar",
    id: 33,
  },
  {
    title: "Saudi Arabia",
    id: 34,
  },
  {
    title: "Singapore",
    id: 35,
  },
  {
    title: "South Korea",
    id: 36,
  },
  {
    title: "Sri Lanka",
    id: 37,
  },
  {
    title: "Syria",
    id: 38,
  },
  {
    title: "Taiwan",
    id: 39,
  },
  {
    title: "Tajikistan",
    id: 40,
  },
  {
    title: "Thailand",
    id: 41,
  },
  {
    title: "Timor-Leste",
    id: 42,
  },
  {
    title: "Turkey",
    id: 43,
  },
  {
    title: "Turkmenistan",
    id: 44,
  },
  {
    title: "United Arab Emirates",
    id: 45,
  },
  {
    title: "Uzbekistan",
    id: 46,
  },
  {
    title: "Vietnam",
    id: 47,
  },
  {
    title: "Yemen",
    id: 48,
  },
  {
    title: "Algeria",
    id: 49,
  },
  {
    title: "Angola",
    id: 50,
  },
  {
    title: "Benin",
    id: 51,
  },
  {
    title: "Botswana",
    id: 52,
  },
  {
    title: "Burkina Faso",
    id: 53,
  },
  {
    title: "Burundi",
    id: 54,
  },
  {
    title: "Cabo Verde",
    id: 55,
  },
  {
    title: "Cameroon",
    id: 56,
  },
  {
    title: "Central African Republic",
    id: 57,
  },
  {
    title: "Chad",
    id: 58,
  },
  {
    title: "Comoros",
    id: 59,
  },
  {
    title: "Congo",
    id: 60,
  },
  {
    title: "Djibouti",
    id: 61,
  },
  {
    title: "Egypt",
    id: 62,
  },
  {
    title: "Equatorial Guinea",
    id: 63,
  },
  {
    title: "Eritrea",
    id: 64,
  },
  {
    title: "Eswatini",
    id: 65,
  },
  {
    title: "Ethiopia",
    id: 66,
  },
  {
    title: "Gabon",
    id: 67,
  },
  {
    title: "Gambia",
    id: 68,
  },
  {
    title: "Ghana",
    id: 69,
  },
  {
    title: "Guinea",
    id: 70,
  },
  {
    title: "Guinea-Bissau",
    id: 71,
  },
  {
    title: "Ivory Coast",
    id: 72,
  },
  {
    title: "Kenya",
    id: 73,
  },
  {
    title: "Lesotho",
    id: 74,
  },
  {
    title: "Liberia",
    id: 75,
  },
  {
    title: "Libya",
    id: 76,
  },
  {
    title: "Madagascar",
    id: 77,
  },
  {
    title: "Malawi",
    id: 78,
  },
  {
    title: "Mali",
    id: 79,
  },
  {
    title: "Mauritania",
    id: 80,
  },
  {
    title: "Mauritius",
    id: 81,
  },
  {
    title: "Morocco",
    id: 82,
  },
  {
    title: "Mozambique",
    id: 83,
  },
  {
    title: "Namibia",
    id: 84,
  },
  {
    title: "Niger",
    id: 85,
  },
  {
    title: "Nigeria",
    id: 86,
  },
  {
    title: "Rwanda",
    id: 87,
  },
  {
    title: "Sao Tome and Principe",
    id: 88,
  },
  {
    title: "Senegal",
    id: 89,
  },
  {
    title: "Seychelles",
    id: 90,
  },
  {
    title: "Sierra Leone",
    id: 91,
  },
  {
    title: "Somalia",
    id: 92,
  },
  {
    title: "South Africa",
    id: 93,
  },
  {
    title: "South Sudan",
    id: 94,
  },
  {
    title: "Sudan",
    id: 95,
  },
  {
    title: "Tanzania",
    id: 96,
  },
  {
    title: "Togo",
    id: 97,
  },
  {
    title: "Tunisia",
    id: 98,
  },
  {
    title: "Uganda",
    id: 99,
  },
  {
    title: "Zambia",
    id: 100,
  },
  {
    title: "Zimbabwe",
    id: 101,
  },
  {
    title: "Albania",
    id: 102,
  },
  {
    title: "Andorra",
    id: 103,
  },
  {
    title: "Austria",
    id: 104,
  },
  {
    title: "Belarus",
    id: 105,
  },
  {
    title: "Belgium",
    id: 106,
  },
  {
    title: "Bosnia and Herzegovina",
    id: 107,
  },
  {
    title: "Bulgaria",
    id: 108,
  },
  {
    title: "Croatia",
    id: 109,
  },
  {
    title: "Cyprus",
    id: 110,
  },
  {
    title: "Czech Republic",
    id: 111,
  },
  {
    title: "Denmark",
    id: 112,
  },
  {
    title: "Estonia",
    id: 113,
  },
  {
    title: "Finland",
    id: 114,
  },
  {
    title: "France",
    id: 115,
  },
  {
    title: "Germany",
    id: 116,
  },
  {
    title: "Greece",
    id: 117,
  },
  {
    title: "Hungary",
    id: 118,
  },
  {
    title: "Iceland",
    id: 119,
  },
  {
    title: "Ireland",
    id: 120,
  },
  {
    title: "Italy",
    id: 121,
  },
  {
    title: "Kosovo",
    id: 122,
  },
  {
    title: "Latvia",
    id: 123,
  },
  {
    title: "Liechtenstein",
    id: 124,
  },
  {
    title: "Lithuania",
    id: 125,
  },
  {
    title: "Luxembourg",
    id: 126,
  },
  {
    title: "Malta",
    id: 127,
  },
  {
    title: "Moldova",
    id: 128,
  },
  {
    title: "Monaco",
    id: 129,
  },
  {
    title: "Montenegro",
    id: 130,
  },
  {
    title: "Netherlands",
    id: 131,
  },
  {
    title: "North Macedonia",
    id: 132,
  },
  {
    title: "Norway",
    id: 133,
  },
  {
    title: "Poland",
    id: 134,
  },
  {
    title: "Portugal",
    id: 135,
  },
  {
    title: "Romania",
    id: 136,
  },
  {
    title: "Russia",
    id: 137,
  },
  {
    title: "San Marino",
    id: 138,
  },
  {
    title: "Serbia",
    id: 139,
  },
  {
    title: "Slovakia",
    id: 140,
  },
  {
    title: "Slovenia",
    id: 141,
  },
  {
    title: "Spain",
    id: 142,
  },
  {
    title: "Sweden",
    id: 143,
  },
  {
    title: "Switzerland",
    id: 144,
  },
  {
    title: "Ukraine",
    id: 145,
  },
  {
    title: "United Kingdom",
    id: 146,
  },
  {
    title: "Vatican City",
    id: 147,
  },
  {
    title: "United States",
    id: 148,
  },
  {
    title: "Canada",
    id: 149,
  },
  {
    title: "Mexico",
    id: 150,
  },
  {
    title: "Cuba",
    id: 151,
  },
  {
    title: "Dominican Republic",
    id: 152,
  },
  {
    title: "Guatemala",
    id: 153,
  },
  {
    title: "Haiti",
    id: 154,
  },
  {
    title: "Brazil",
    id: 155,
  },
  {
    title: "Argentina",
    id: 156,
  },
  {
    title: "Peru",
    id: 157,
  },
  {
    title: "Colombia",
    id: 158,
  },
  {
    title: "Venezuela",
    id: 159,
  },
  {
    title: "Chile",
    id: 160,
  },
  {
    title: "Ecuador",
    id: 161,
  },
  {
    title: "Australia",
    id: 162,
  },
  {
    title: "New Zealand",
    id: 163,
  },
  {
    title: "Papua New Guinea",
    id: 164,
  },
  {
    title: "Fiji",
    id: 165,
  },
  {
    title: "Solomon Islands",
    id: 166,
  },
  {
    title: "Vanuatu",
    id: 167,
  },
  {
    title: "Samoa",
    id: 168,
  },
];
const Form2 = ({ setStage, setQuoteData }) => {

  const [startDateValue, setStartDateValue] = useState(null);
  const [endDateValue, setendDateValue] = useState(null);

  const onSubmit = (data) => {
    data = { ...data, countries: data.countries.map((country) => country.title), ped: data.ped ? 'Yes' : 'No', tripDuration: calculateDays() }
    setQuoteData((prev) => ({ ...prev, ...data }));
  }


  const calculateDays = () => {
    if (!startDateValue || !endDateValue) {
      return '';
    }
    const startDate = new Date(startDateValue);
    const endDate = new Date(endDateValue);
    const difference = endDate.getTime() - startDate.getTime();
    const daysDifference = Math.ceil(difference / (1000 * 3600 * 24));
    return daysDifference;
  };

  const validateStartDate = (value) => {
    const today = new Date();
    const startDate = new Date(value);

    if (startDate < today) {
      return "Start Date must be today or later";
    }

    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 180);

    if (startDate > maxDate) {
      return "Start Date must be within the next 180 days";
    }
    return undefined;
  };

  const validateEndDate = (value) => {
    const startDate = new Date(getValues('startDate'));
    const endDate = new Date(value);
    if (endDate < startDate) {
      return "End Date must be after Start Date";
    }
    const maxDate = new Date(startDate);
    maxDate.setDate(startDate.getDate() + 365);
    if (endDate > maxDate) {
      return "End Date must be within 365 days from Start Date";
    }
    return undefined;
  };

  const { handleSubmit, control, formState: { errors }, getValues } = useForm(
    {
      defaultValues: {
        mobile: '',
        name: '',
      },
    }
  );

  return <Box
    sx={{
      m: 4,
    }}
  >
    <Typography textAlign="center" component="h1" variant="h4">
      Trip Details
    </Typography>
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 1 }}
    >
      <Grid container rowSpacing={3} columnSpacing={3} mt={1}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="name"
            control={control}
            rules={{
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name should be at least 3 characters',
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: 'Name should contain only alphabetic characters',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                fullWidth
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ''}
                inputProps={{
                  maxLength: 50
                }}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^A-Za-z]/g, '');
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="mobile"
            control={control}
            rules={{
              required: 'Mobile number is required',
              pattern: {
                value: /^[6-9][0-9]{9}$/,
                message: 'Please enter a valid mobile number',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Mobile"
                fullWidth
                error={!!errors.mobile}
                helperText={errors.mobile ? errors.mobile.message : ''}
                inputProps={{
                  maxLength: 10,
                }}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, '');
                }}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="countries"
            control={control}
            defaultValue={[]}
            rules={{
              validate: {
                onBlur: (value) => {
                  if (!value || value.length === 0) {
                    return "Please select at least one country";
                  }
                  return true;
                },
              },
            }}
            render={({ field }) => (
              <Autocomplete
                {...field}
                onChange={(e, value) => field.onChange(value)}
                onBlur={field.onBlur}
                value={field.value || []}
                fullWidth
                multiple
                id="checkboxes-tags-demo"
                options={countries}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderOption={(props, option, { selected }) => {
                  const key = option.id || option.title;
                  const { key: propsKey, ...otherProps } = props;

                  return (
                    <li key={key} {...otherProps}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.title}
                    </li>
                  );
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Selected Countries"
                    placeholder="Countries"
                    error={Boolean(errors?.countries)}
                    helperText={errors?.countries ? errors.countries.message : null}
                  />
                )}
              />
            )}
          />






        </Grid>








        <Grid item xs={12} sm={6}>
          <Controller
            name="startDate"
            control={control}
            defaultValue=""
            rules={{ required: true, validate: validateStartDate }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                type="date"
                label="Start Date"
                error={!!errors.startDate}
                helperText={errors.startDate && errors.startDate.message}
                InputLabelProps={{ shrink: true }}
                inputProps={{
                  min: new Date().toISOString().split("T")[0],
                  max: new Date(
                    new Date().getTime() + 180 * 24 * 60 * 60 * 1000
                  ).toISOString().split("T")[0],
                }}
                onChange={(e) => {
                  field.onChange(e);
                  setStartDateValue(e.target.value);
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="endDate"
            control={control}
            defaultValue=""
            rules={{ required: true, validate: validateEndDate }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                type="date"
                label="End Date"
                error={!!errors.endDate}
                helperText={errors.endDate && errors.endDate.message}
                InputLabelProps={{ shrink: true }}

                inputProps={{
                  min: startDateValue,
                  max: new Date(
                    new Date(startDateValue).getTime() + 365 * 24 * 60 * 60 * 1000
                  ).toISOString().split("T")[0]
                }}
                onChange={(e) => {
                  field.onChange(e);
                  setendDateValue(e.target.value);
                }}

              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="ped"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} value="remember" color="primary" />}
                label={
                  <Typography component={Stack} direction="row" alignItems="center">
                    Have Any Previous Existing Diseases?
                    <Tooltip
                      sx={{ ml: 1 }}
                      title="Any condition, ailment or injury for which the insured person had signs or symptoms and/or were diagnosed, and/or received medical advice/treatment within 48 months prior to the first policy issued by the insurer."
                    >
                      <InfoRoundedIcon color="info" />
                    </Tooltip>
                  </Typography>
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          {startDateValue && endDateValue && (
            <Typography variant="body1" textAlign="center">
              Number of days: {calculateDays()}
            </Typography>
          )}
        </Grid>
      </Grid>

      <Stack
        justifyContent={"space-between"}
        flexDirection={"row"}
        rowGap={2}
        alignItems={"center"}
        mt={3}
      >
        <Button
          startIcon={<ArrowBackRoundedIcon />}
          type="button"
          variant="contained"
          color='info'
          onClick={() => setStage(false)}
        >
          Back
        </Button>
        <Button
          endIcon={<ArrowForwardRoundedIcon />}
          type="submit"
          variant="contained"
            color='info'
        >
          Next
        </Button>
      </Stack>
    </Box>
  </Box>


}

export default Form2

