import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';

const MyImageCard = (props) => {
  return (
    <div>
      <Card inverse>
        <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>Card Title</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default MyImageCard;
