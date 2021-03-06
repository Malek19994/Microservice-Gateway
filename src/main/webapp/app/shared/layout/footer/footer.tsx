import './footer.scss';

import React from 'react';
import { Translate } from 'react-jhipster';
import { Col, Row } from 'reactstrap';

const Footer = props => (
  <div className="footer page-content">
    <Row>
      <Col md="12">
        <p>
          <Translate contentKey="footer">Malek</Translate>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </p>
      </Col>
    </Row>
  </div>
);

export default Footer;
