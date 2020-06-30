/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Dropdown, Menu, Item, Trigger, GARDEN_PLACEMENT } from '@zendeskgarden/react-dropdowns';
import { Button } from '@zendeskgarden/react-buttons';
import { Row, Col } from '@zendeskgarden/react-grid';

const PLACEMENTS: Record<string, GARDEN_PLACEMENT> = {
  auto: 'auto',
  top: 'top',
  topStart: 'top-start',
  topEnd: 'top-end',
  end: 'end',
  endTop: 'end-top',
  endBottom: 'end-bottom',
  bottom: 'bottom',
  bottomStart: 'bottom-start',
  bottomEnd: 'bottom-end',
  start: 'start',
  startTop: 'start-top',
  startBottom: 'start-bottom'
};

const Example = () => (
  <Row style={{ margin: 140 }}>
    <Col textAlign="center">
      <Dropdown onSelect={item => alert(`You planted a ${item}`)}>
        <Trigger>
          <Button>Menu</Button>
        </Trigger>
        <Menu placement={PLACEMENTS.topStart}>
          <Item value="cactus">Cactus</Item>
          <Item value="flower">Flower</Item>
          <Item value="succulent">Succulent</Item>
        </Menu>
      </Dropdown>
    </Col>
  </Row>
);

export default Example;