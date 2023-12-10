import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ContactIs = () => {


    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phone: "",
            message: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("This is Required"),
            lastName: Yup.string().required("This is Required"),
            phone: Yup.string().required("This is Required"),
            message: Yup.string().required("This is Required")
        }),
        onSubmit: (values) => {
            console.log("form submitted", values)
        }
    })

    return (
        <><br/><br/><br/><br/>
        <Paper elevation={10} >

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography fontWeight='bolder' fontSize={25}>Contact US -</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box
                        component="form"
                        onSubmit={formik.handleSubmit}
                    >
                        <TextField
                            label="First Name"
                            type="text"
                            variant="outlined"
                            sx={{ width: "350px", m: 2 }}
                            name="firstName"
                            onChange={formik.handleChange}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                        <TextField
                            label="Last Name"
                            type="text"
                            variant="outlined"
                            sx={{ width: "350px", m: 2 }}
                            name="lastName"
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                        <TextField
                            label="Phone Number"
                            type="tel"
                            variant="outlined"
                            sx={{ width: "350px", m: 2 }}
                            name="phone"
                            onChange={formik.handleChange}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                            onBlur={formik.handleBlur}
                        />
                        <TextField
                            label="Message"
                            type="text"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            sx={{ m: 1 }}
                            name="message"
                            onChange={formik.handleChange}
                            error={formik.touched.message && Boolean(formik.errors.message)}
                            helperText={formik.touched.message && formik.errors.message}
                            onBlur={formik.handleBlur}
                        />
                        <Button size="large" variant="contained" type="sumbit" sx={{ m: 1 }}>Send</Button>
                    </Box>

                </AccordionDetails>
            </Accordion>

</Paper>
            {/*   */}
        </>
    )
}

export default ContactIs