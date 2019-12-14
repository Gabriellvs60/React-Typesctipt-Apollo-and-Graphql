import React from 'react';
import { Input, Select } from 'antd';
const { Option } = Select;

interface Props {

}

const Form = ({ }: Props) => {
    return (
        <form>
            <p>Nome</p>
            <Input name="name" placeholder="Nome" type="text" />
            <p>Idade</p>
            <Input name="age" placeholder="Idade" type="text"/>
            <p>Endereço</p>
            <Input name="address" placeholder="Endereço" type="text"/>
            <p>Telefone</p>
            <Input name="telephone" placeholder="Telefone" type="text"/>
            <p>Tipo</p>
            <Select defaultValue="comum" style={{ width: 120 }}>
                <Option value="comum">Comum</Option>
                <Option value="premium">Premium</Option>
                <Option value="trial">Trial</Option>
            </Select>
        </form>
    )
}

export default Form