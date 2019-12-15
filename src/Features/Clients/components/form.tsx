import React, { useEffect } from 'react';
import { FormikProps } from "formik";
import { Input, Select, Button } from 'antd';
const { Option } = Select;


interface Props {
    formikProps: FormikProps<any>
    editData: any
}

const Form = ({ formikProps, editData }: Props) => {

    useEffect(() => {
        editData ? formikProps.setValues(editData) : formikProps.setValues({ id: undefined, name: "", age: "", address: "", telephone: "", type:"comum" })
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
            <Button>
                        Salvar
                    </Button>
                    <Button>
                        Cancelar
                    </Button>
        </form>

    )
}

export default Form