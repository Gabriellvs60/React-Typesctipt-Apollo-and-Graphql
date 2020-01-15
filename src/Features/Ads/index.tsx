import React from 'react';
import Navbar from '../../commom/components/Navbar/';
import CardAds from '../../commom/components/CardAds/';
import {StyledBody} from '../../commom/components/Content/content.styles';
export default function Ads() {
    return (
        <div>
            <Navbar/>
            <StyledBody>
                <CardAds title="Quadras de Padel" description="As melhores da cidade" price="R$ 5.00"/>
                <CardAds title="Quadras de Padel" description="As melhores da cidade" price="R$ 5.00"/>
                <CardAds title="Quadras de Padel" description="As melhores da cidade" price="R$ 5.00"/>
            </StyledBody>
        </div>
    );
}

