/* eslint-disable */
import * as Yup from "yup";

const locale = {
  mixed: {
    default: "Campo está inválido",
    required: "Campo obrigatório",
    oneOf: "${path} deve ser um dos seguintes valores: ${values}",
    notOneOf: "{path} não deve ser um dos seguintes valores: ${values}"
  },
  string: {
    length: "${path} deve ter exatamente ${length} caracteres",
    min: "${path} deve ter pelo menos ${min} caracteres",
    max: "${path} deve ter no máximo ${max} caracteres",
    matches: "${path} deve corresponder ao seguinte: '${regex}'",
    email: "E-mail inválido",
    url: "${path} deve ser um URL válido",
    trim: "${path} deve ser uma string aparada",
    lowercase: "${path} deve ser uma string em minúscula",
    uppercase: "${path} deve ser uma string em maiúsculas"
  },
  number: {
    min: "${path} deve ser maior ou igual a ${min}",
    max: "${path} deve ser menor ou igual a ${max}",
    lessThan: "${path} deve ser menor que ${less}",
    moreThan: "${path} deve ser maior que ${more}",
    notEqual: "${path} não deve ser igual a ${notEqual}",
    positive: "${path} deve ser um número positivo",
    negative: "${path} deve ser um número negativo",
    integer: "${path} deve ser um número inteiro"
  },
  date: {
    min: "${path} deve ser posterior a ${min}",
    max: "${path} deve estar anterior a ${max}"
  },
  boolean: {},
  object: {
    noUnknown:
      "O campo ${path} não pode ter chaves não especificadas no formato do objeto"
  },
  array: {
    min: "O campo ${path} deve ter pelo menos ${min} itens",
    max: "O campo ${path} deve ter itens iguais ou inferiores a ${max} itens"
  }
};

Yup.setLocale(locale);

export default Yup;
