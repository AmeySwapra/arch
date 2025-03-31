import { Box, Button, FormControl, FormLabel, Input, Select, Text, VStack } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const initialValues = {
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    country: "",
  };

  const validationSchema = Yup.object({
    companyName: Yup.string().required("Company Name is required"),
    contactPerson: Yup.string().required("Contact Person is required"),
    phone: Yup.string().required("Phone Number is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    country: Yup.string().required("Country is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form Submitted", values);
  };

  return (
    <Box  py={10} px={{base: 4, md:8, lg :24}} rounded="md" boxShadow="lg" color="black">
      <Text fontSize="2xl" fontWeight="bold" color='red.500' textAlign="center" mb={4}>
        Your Dream Home is Just a Click Away!
      </Text>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Company Name</FormLabel>
                <Field as={Input} name="companyName" placeholder="Enter company name" />
                {errors.companyName && touched.companyName && <Text color="red.400">{errors.companyName}</Text>}
              </FormControl>

              <FormControl>
                <FormLabel>Contact Person</FormLabel>
                <Field as={Input} name="contactPerson" placeholder="Enter contact person" />
                {errors.contactPerson && touched.contactPerson && <Text color="red.400">{errors.contactPerson}</Text>}
              </FormControl>

              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Field as={Input} name="phone" placeholder="Enter phone number" />
                {errors.phone && touched.phone && <Text color="red.400">{errors.phone}</Text>}
              </FormControl>

              <FormControl>
                <FormLabel>Email</FormLabel>
                <Field as={Input} type="email" name="email" placeholder="Enter email" />
                {errors.email && touched.email && <Text color="red.400">{errors.email}</Text>}
              </FormControl>

              <FormControl>
                <FormLabel>Country</FormLabel>
                <Field as={Select} name="country">
                  <option value="">Select a country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  {/* Add more options as needed */}
                </Field>
                {errors.country && touched.country && <Text color="red.400">{errors.country}</Text>}
              </FormControl>

              <Button type="submit" bg={'#97866c'} w="full">
                Submit
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
