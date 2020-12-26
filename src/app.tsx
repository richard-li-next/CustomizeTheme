import {
  Calendar,
  Checkbox,
  DatePicker,
  Input,
  Radio,
  Select,
  Tag,
  Timeline,
  TimePicker,
} from 'antd';
import React, { useState } from 'react';
import styles from './styles.less';

export default function App() {
  const [select, setSelect] = useState('');

  return (
    <div className={styles.container}>
      <section className={styles.box}>
        <Input />
      </section>
      <section className={styles.box}>
        <Input.Search />
      </section>
      <section className={styles.box}>
        <Select placeholder="Select" style={{ width: '100%' }}>
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="disabled" disabled>
            Disabled
          </Select.Option>
        </Select>
      </section>
      <section className={styles.box}>
        <Calendar />
      </section>
      <section className={styles.box}>
        <DatePicker />
      </section>
      <section className={styles.box}>
        <TimePicker />
      </section>
      <section className={styles.box}>
        <Timeline>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
        </Timeline>
      </section>
      <section className={styles.box}>
        <Radio>Radio</Radio>
      </section>
      <section className={styles.box}>
        <Tag>Tag 1</Tag>
      </section>
      <section className={styles.box}>
        <Checkbox>Checkbox</Checkbox>
      </section>
    </div>
  );
}
