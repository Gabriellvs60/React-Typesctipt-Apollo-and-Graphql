import React, { useEffect } from 'react';
import { FormikProps } from "formik";
import { Input, Select } from 'antd';
const { Option } = Select;

interface Props {
    formikProps: FormikProps<any>
    editData: any
}

const Form = ({ formikProps, editData }: Props) => {

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
            type: "Premium"
        })
    }, [editData])

    return (
        <form onSubmit={formikProps.handleSubmit}>
            <p>Nome</p>
            <Input name="name" placeholder="Nome" type="text" />
            <p>Idade</p>
            <Input name="age" placeholder="Idade" type="text" />
            <p>Endereço</p>
            <Input name="address" placeholder="Endereço" type="text" />
            <p>Telefone</p>
            <Input name="telephone" placeholder="Telefone" type="text" />
            <p>Tipo</p>
            <Select defaultValue="comum" style={{ width: 120 }}>
                <Option value="comum">Comum</Option>
                <Option value="premium">Premium</Option>
                <Option value="trial">Trial</Option>
            </Select>
            <button
                    type={'submit'}
                    >
                    Salvar
                  </button>
                <button
                    type={'reset'}
                   
                    >
                    Cancelar
                </button>
        </form>
    )
}

export default Form