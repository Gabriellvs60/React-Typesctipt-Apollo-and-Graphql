import React from 'react';
import { Skeleton, Switch, Card, Icon, Avatar } from 'antd';

const { Meta } = Card;
interface Props{
  title: string,
  description: string,
  price: string
}

const CardAds = ({title, description, price} : Props) => {
return(
    <div>
        <Card style={{ width: 450, marginTop: 16 }} 
          actions={[
            <Icon type="star" key="Favoritar" />,
            <Icon type="dollar" key="Contratar" />,
          ]}
          cover={<img alt="example" src="https://www.clubecomercialpf.com.br/wp-content/uploads/2019/05/IMG_8038-1.jpg" />}
          >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={title}
            description={description}
          />
          <p>Valor: {price} A Hora</p>
        </Card>
    </div>
)
};

export default CardAds;
