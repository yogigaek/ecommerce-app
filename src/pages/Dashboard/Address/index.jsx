import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getAddress, createAddress } from "../../../app/api/address";
import SelectMenu from "../../../components/SelectMenu";
import Sidebar from "../Sidebar";
import {
  Wrapper,
  Content,
  Title,
  Container,
  List,
  Forms,
  Card,
  Label,
  Text,
  Feedback,
  Input,
  TextArea,
  Submit,
  FormTitle,
  Header,
} from "./styled";

const schema = yup
  .object({
    name: yup.string().required("Nama alamat harus diisi"),
    detail: yup.string().required("Detail alamat harus diisi"),
    provinsi: yup.string().nullable().required("Provinsi belum diisi"),
    kabupaten: yup.string().nullable().required("Kabupaten belum diisi"),
    kecamatan: yup.string().nullable().required("Kecamatan belum diisi"),
    kelurahan: yup.string().nullable().required("Kelurahan belum diisi"),
  })
  .required();

const Address = () => {
  const [address, setAddress] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [status, setStatus] = useState("idle");
  const updateValue = (field, value) =>
    setValue(field, value, { shouldValidate: true, shouldDirty: true });
  const allField = watch();

  useEffect(() => {
    setValue("kabupaten", null);
    setValue("kecamatan", null);
    setValue("kelurahan", null);
  }, [allField.provinsi, setValue]);
  useEffect(() => {
    setValue("kecamatan", null);
    setValue("kelurahan", null);
  }, [allField.kabupaten, setValue]);
  useEffect(() => {
    setValue("kelurahan", null);
  }, [allField.kecamatan, setValue]);

  useEffect(() => {
    getAddress().then(({ data: { data } }) => setAddress(data));
  }, []);

  const onSubmit = async (formData) => {
    const payload = {
      name: formData.name,
      detail: formData.detail,
      provinsi: formData.provinsi,
      kabupaten: formData.kabupaten,
      kecamatan: formData.kecamatan,
      kelurahan: formData.kelurahan,
    };

    setStatus("process");
    const { data } = await createAddress(payload);
    if (!data.error) {
      setStatus("success");
      getAddress().then(({ data: { data } }) => {
        setAddress(data);
        reset();
      });
    }
  };

  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <Title>Address</Title>
        <Container>
          <List>
            {address.map((item, i) => (
              <Card key={i}>
                <Header>
                  <h1>Information</h1>
                </Header>
                <Label>Name:</Label>
                <Text type="text" value={item.name} disabled />
                <Label>Detail:</Label>
                <Text type="text" value={item.detail} disabled />
                <Label>Kelurahan:</Label>
                <Text type="text" value={item.kelurahan} disabled />
                <Label>Kecamatan:</Label>
                <Text type="text" value={item.kecamatan} disabled />
                <Label>Kabupaten:</Label>
                <Text type="text" value={item.kabupaten} disabled />
                <Label>Provinsi:</Label>
                <Text type="text" value={item.provinsi} disabled />
              </Card>
            ))}
          </List>
          <Forms onSubmit={handleSubmit(onSubmit)}>
            <FormTitle>Add New Address</FormTitle>
            <Label>Name:</Label>
            <Input type="text" isInvalid={errors.name} {...register("name")} />
            <Feedback>{errors.name?.message}</Feedback>
            <Label>Provinsi:</Label>
            <SelectMenu
              onChange={(value) => updateValue("provinsi", value)}
              isInvalid={!!errors.provinsi}
              value={getValues()?.provinsi}
            />
            <Feedback>{errors.provinsi?.message}</Feedback>
            <Label>Kabupaten:</Label>
            <SelectMenu
              onChange={(value) => updateValue("kabupaten", value)}
              isInvalid={!!errors.kabupaten}
              value={getValues()?.kabupaten}
            />
            <Feedback>{errors.kabupaten?.message}</Feedback>
            <Label>Kecamatan:</Label>
            <SelectMenu
              onChange={(value) => updateValue("kecamatan", value)}
              isInvalid={!!errors.kecamatan}
              value={getValues()?.kecamatan}
            />
            <Feedback>{errors.kecamatan?.message}</Feedback>
            <Label>Kelurahan:</Label>
            <SelectMenu
              onChange={(value) => updateValue("kelurahan", value)}
              isInvalid={!!errors.kelurahan}
              value={getValues()?.kelurahan}
            />
            <Feedback>{errors.kelurahan?.message}</Feedback>
            <Label>Detail:</Label>
            <TextArea {...register("detail")} />
            <Submit type="submit" disabled={status === "process"}>
              {status === "process" ? "Saving..." : "Submit"}
            </Submit>
          </Forms>
        </Container>
      </Content>
    </Wrapper>
  );
};

export default Address;
