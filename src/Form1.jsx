import { Box, Button, ButtonGroup, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const Form1 = ({ setStage, setQuoteData }) => {
    const [travellerCount, setTravellerCount] = React.useState(1);
    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();
    const onSubmit = (data) => {
        for (let x = 1; x <= 6; x++) {
            if (x > travellerCount) {
                delete data[`travellerAge${x}`];
            }
        }
        setQuoteData({ ...data, travellerCount: travellerCount });
        setStage(true);
    };
    return (
        <Box sx={{ m: 4 }}>
            <Typography textAlign="center" component="h1" variant="h4">
                How Many People Are Travelling ?
            </Typography>
            <Box
                noValidate
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 1 }}
            >
                <Box maxWidth={"300px"} mx={"auto"} mt={5}>
                    <ButtonGroup
                        fullWidth
                        size="large"
                        variant="outlined"
                        aria-label="Basic button group"
                    >
                        <Button onClick={() => setTravellerCount(1)}>1</Button>
                        <Button onClick={() => setTravellerCount(2)}>2</Button>
                        <Button onClick={() => setTravellerCount(3)}>3</Button>
                        <Button
                            onClick={() =>
                                setTravellerCount((prev) => (prev < 6 ? prev + 1 : prev))
                            }
                        >
                            +
                        </Button>
                    </ButtonGroup>
                </Box>

                <Grid container mt={1} columnSpacing={3} rowSpacing={3}>
                    {Array(travellerCount)
                        .fill("")
                        .map((_, index) => (
                            <Grid
                                key={index}
                                item
                                xs={12}
                                md={travellerCount === 1 ? 12 : 6}
                            >
                                <Controller
                                    name={`travellerAge${index + 1}`}
                                    control={control}
                                    rules={{
                                        required: `Traveller ${index + 1} Age is Required`,
                                        validate: (value) =>
                                            value !== "" ||
                                            `Traveller Age${index + 1} is Required`,
                                    }}
                                    render={({ field }) => (
                                        <Box>
                                            <FormControl
                                                fullWidth
                                                error={
                                                    errors[`travellerAge${index + 1}`]?.message
                                                        ? true
                                                        : false
                                                }
                                            >
                                                <InputLabel id="demo-simple-select-label">
                                                    Traveller Age {index + 1}
                                                </InputLabel>
                                                <Select
                                                    fullWidth
                                                    {...field}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label={`Traveller Age ${index + 1}`}
                                                    value={field.value || ""}
                                                    onChange={field.onChange}
                                                    MenuProps={{
                                                        PaperProps: {
                                                            style: {
                                                                maxHeight: 200,
                                                            },
                                                        },
                                                        anchorOrigin: {
                                                            vertical: "bottom",
                                                            horizontal: "left",
                                                        },
                                                        transformOrigin: {
                                                            vertical: "top",
                                                            horizontal: "left",
                                                        },
                                                    }}
                                                >
                                                    <MenuItem value="" disabled>
                                                        Select Age
                                                    </MenuItem>
                                                    {Array(101)
                                                        .fill("")
                                                        .map((value, index) => (
                                                            <MenuItem key={index} value={index + 1}>
                                                                {index + 1} Years
                                                            </MenuItem>
                                                        ))}
                                                </Select>
                                            </FormControl>
                                            <FormHelperText error>
                                                {errors[`travellerAge${index + 1}`]?.message}
                                            </FormHelperText>
                                        </Box>
                                    )}
                                />
                            </Grid>
                        ))}
                </Grid>

                <Stack rowGap={2} alignItems={"center"} mt={3}>
                    <Typography>Selected Travellers : {travellerCount}</Typography>
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

    )
}

export default Form1