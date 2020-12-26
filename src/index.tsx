import { Button } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import 'antd/lib/style/themes/default.less';
import styles from './styles.less';

ReactDOM.render(
  <div className={styles.box}>
    <Button type="primary">DEMO</Button>
  </div>,
  document.getElementById('root')
);
