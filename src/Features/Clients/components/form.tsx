import React, { useEffect } from 'react';
import { FormikProps, Field, useField } from "formik";
import { Input, Select, Button } from 'antd';
import { Label, Bottom } from '../../../commom/components/Form/form.styles';

const { Option } = Select;

const MyTextField = ({ label, ...props }: any) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label>
                {label}
                <Input {...field} {...props} />
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

interface Props {
    formikProps: FormikProps<any>
    editData?: any
    cancelFunction: Function
}

const Form = ({ formikProps, editData, cancelFunction }: Props) => {
    useEffect(() => {
        editData ? formikProps.setValues({
            id: editData.id,
            name: editData.name,
            age: editData.age,
            telephone: editData.telephone,
            address: editData.address,
            type: editData.type,
        }) : formikProps.setValues({
            id: "",
            name: "",
            age: "",
            telephone: "",
            address: "",
            type: "Comum"
        })
    }, [editData])

    return (
        <form onSubmit={formikProps.handleSubmit}>
            <Label>Nome</Label>
            <MyTextField name="name" type="text" />
            <Label>Idade</Label>
            <MyTextField name="age" type="text" />
            <Label>Endereço</Label>
            <MyTextField name="address" type="text" />
            <Label>Telefone</Label>
            <MyTextField name="telephone" type="text" />
            <Label>Tipo</Label>

            <Field
                name="type"
                component="select"
                placeholder="Tipo de Cliente"
                style={{ width: 120 }}
                value={formikProps.values.type}>
                <option value="Comum">Comum</option>
                <option value="Premium">Premium</option>
                <option value="Trial">Trial</option>
            </Field>

            <Bottom>
                <Button type={'primary'} htmlType={'submit'}>
                    Salvar
                </Button>
                <Button type={'ghost'} htmlType={"reset"} onClick={() => cancelFunction(formikProps)} >
                    Cancelar
                </Button>
            </Bottom>
        </form>
    )
}

export default Form