import { Table, Tag, Space, Input } from 'antd';

const { Search } = Input;

export default function () {
  const columns = [
    {
      title: '学号',
      dataIndex: 'sno',
      key: 'sno',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: '学院',
      dataIndex: 'college',
      key: 'college',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: '专业',
      dataIndex: 'major',
      key: 'major',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: '联系方式',
      dataIndex: 'tel',
      key: 'tel',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: '信用分',
      dataIndex: 'credit',
      key: 'credit',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: '志愿积分',
      dataIndex: 'integral',
      key: 'tel',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: '所属组织',
      dataIndex: 'org',
      key: 'org',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: '部门',
      dataIndex: 'dep',
      key: 'dep',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: '职务',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag === '部长' ? 'geekblue' : 'green';
            if (tag === '副部长') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          {/* <a>{record.name}</a> */}
          <a>详情</a>
          <a>编辑</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      sno: '04180101',
      name: '小明',
      college: '计算机学院',
      major: '计算机科学与技术',
      tel: '18824724136',
      credit: 80,
      integral: 0,
      org: '校青协',
      dep: '秘书处',
      tel2: '',
      tags: ['秘书长'],
    },
    {
      key: '2',
      sno: '04180102',
      name: '小红',
      college: '计算机学院',
      major: '计算机科学与技术',
      tel: '18824724136',
      credit: 80,
      integral: 0,
      org: '校青协',
      dep: '项目管理部',
      tel2: '',
      tags: ['部长'],
    },
    {
      key: '3',
      sno: '04180101',
      name: 'aa',
      college: '计算机学院',
      major: '计算机科学与技术',
      tel: '18824724136',
      credit: 80,
      integral: 0,
      org: '校青协',
      dep: '媒体宣传部',
      tel2: '',
      tags: ['副部长'],
    },
    {
      key: '4',
      sno: '04180101',
      name: 'bb',
      college: '计算机学院',
      major: '计算机科学与技术',
      tel: '18824724136',
      credit: 80,
      integral: 0,
      org: '校青协',
      dep: '媒体宣传部',
      tel2: '',
      tags: [],
    },
    {
      key: '5',
      sno: '04180101',
      name: 'cc',
      college: '计算机学院',
      major: '计算机科学与技术',
      tel: '18824724136',
      credit: 80,
      integral: 0,
      org: '校青协',
      dep: '媒体宣传部',
      tel2: '',
      tags: [],
    },
    {
      key: '6',
      sno: '04180101',
      name: 'dd',
      college: '计算机学院',
      major: '计算机科学与技术',
      tel: '18824724136',
      credit: 80,
      integral: 0,
      org: '校青协',
      dep: '媒体宣传部',
      tel2: '',
      tags: [],
    },
    {
      key: '7',
      sno: '04180101',
      name: 'ee',
      college: '计算机学院',
      major: '计算机科学与技术',
      tel: '18824724136',
      credit: 80,
      integral: 0,
      org: '校青协',
      dep: '媒体宣传部',
      tel2: '',
      tags: [],
    },
    {
      key: '8',
      sno: '04180101',
      name: 'ff',
      college: '计算机学院',
      major: '计算机科学与技术',
      tel: '18824724136',
      credit: 80,
      integral: 0,
      org: '校青协',
      dep: '媒体宣传部',
      tel2: '',
      tags: [],
    },
    {
      key: '9',
      sno: '04180101',
      name: 'gg',
      college: '计算机学院',
      major: '计算机科学与技术',
      tel: '18824724136',
      credit: 80,
      integral: 0,
      org: '校青协',
      dep: '媒体宣传部',
      tel2: '',
      tags: [],
    },
    {
      key: '10',
      sno: '04180101',
      name: 'hh',
      college: '计算机学院',
      major: '计算机科学与技术',
      tel: '18824724136',
      credit: 80,
      integral: 0,
      org: '校青协',
      dep: '媒体宣传部',
      tel2: '',
      tags: [],
    },
  ];

  return (
    <>
      <Search></Search>
      <Table columns={columns} dataSource={data} />
    </>
  )
}