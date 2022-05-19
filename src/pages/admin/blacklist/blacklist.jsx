import { Table, Tag, Space, Input } from 'antd';

const { Search } = Input;

export default function () {
  const columns = [
    {
      title: '学号',
      dataIndex: 'sno',
      key: 'sno',
      sorter: (a, b) => a.sno - b.sno,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name, 'zh-CN'),
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
      sorter: (a, b) => a.gender.localeCompare(b.gender, 'zh-CN'),
      filters: [
        {
          text: '男',
          value: '男',
        },
        {
          text: '女',
          value: '女',
        },
      ],
      onFilter: (value, record) => record.gender.indexOf(value) === 0,
    },
    {
      title: '学院',
      dataIndex: 'college',
      key: 'college',
      filters: [
        {
          text: '美术与设计学院',
          value: '美术与设计学院',
        },
        {
          text: '工商管理学院',
          value: '工商管理学院',
        },
        {
          text: '电子信息工程学院',
          value: '电子信息工程学院',
        },
        {
          text: '	计算机学院',
          value: '	计算机学院',
        },
        {
          text: '旅游学院',
          value: '旅游学院',
        },
        {
          text: '机械工程学院',
          value: '机械工程学院',
        },
        {
          text: '文学院',
          value: '文学院',
        },
        {
          text: '公共管理学院',
          value: '公共管理学院',
        },
        {
          text: '外国语学院',
          value: '外国语学院',
        },
        {
          text: '药学与食品科学学院',
          value: '药学与食品科学学院',
        },
        {
          text: '建筑与城乡规划学院',
          value: '建筑与城乡规划学院',
        },
        {
          text: '金融与贸易学院',
          value: '金融与贸易学院',
        },
        {
          text: '物流管理与工程学院',
          value: '物流管理与工程学院',
        },
        {
          text: '音乐舞蹈学院',
          value: '音乐舞蹈学院',
        },
        {
          text: '健康学院',
          value: '健康学院',
        },
        {
          text: '航空工程学院',
          value: '航空工程学院',
        },
        {
          text: '化学与新能源材料学院',
          value: '化学与新能源材料学院',
        },
        {
          text: '公共基础与应用统计学院',
          value: '公共基础与应用统计学院',
        },
        {
          text: '体育科学学院',
          value: '体育科学学院',
        },
        {
          text: '阿里云大数据应用学院',
          value: '阿里云大数据应用学院',
        },
        {
          text: '继续教育学院',
          value: '继续教育学院',
        },
      ],
      onFilter: (value, record) => record.college.indexOf(value) === 0,
      sorter: (a, b) => a.college.localeCompare(b.college, 'zh-CN'),
    },
    {
      title: '专业',
      dataIndex: 'major',
      key: 'major',
      filters: [
        {
          text: '美术与设计学院',
          value: '美术与设计学院',
          children: [
            {
              text: '视觉传达设计',
              value: '视觉传达设计',
            },
            {
              text: '动画',
              value: '动画',
            },
          ],
        },
        {
          text: '工商管理学院',
          value: '工商管理学院',
          children: [
            {
              text: '工商管理',
              value: '工商管理',
            },
            {
              text: '会计学',
              value: '会计学',
            },
            {
              text: '人力资源管理',
              value: '人力资源管理',
            },
            {
              text: '财务管理',
              value: '财务管理',
            },
            {
              text: '市场营销',
              value: '市场营销',
            },
          ],
        },
        {
          text: '电子信息工程学院',
          value: '电子信息工程学院',
          children: [
            {
              text: '自动化',
              value: '自动化',
            },
            {
              text: '通信工程',
              value: '通信工程',
            },
            {
              text: '微电子科学与工程',
              value: '微电子科学与工程',
            },
            {
              text: '电子信息科学与技术',
              value: '电子信息科学与技术',
            },
          ],
        },
        {
          text: '	计算机学院',
          value: '	计算机学院',
          children: [
            {
              text: '计算机科学与技术',
              value: '计算机科学与技术',
            },
            {
              text: '软件工程',
              value: '软件工程',
            },
            {
              text: '网络工程',
              value: '网络工程',
            },
            {
              text: '信息管理与信息系统',
              value: '信息管理与信息系统',
            },
            {
              text: '智能科学与技术',
              value: '智能科学与技术',
            },
          ],
        },
        {
          text: '旅游学院',
          value: '旅游学院',
          children: [
            {
              text: '旅游管理',
              value: '旅游管理',
            },
            {
              text: '酒店管理',
              value: '酒店管理',
            },
            {
              text: '会展经济与管理',
              value: '会展经济与管理',
            },
          ],
        },
        {
          text: '机械工程学院',
          value: '机械工程学院',
          children: [
            {
              text: '机械设计制造及其自动化',
              value: '机械设计制造及其自动化',
            },
            {
              text: '车辆工程',
              value: '车辆工程',
            },
            {
              text: '工业工程',
              value: '工业工程',
            },
            {
              text: '机械电子工程',
              value: '机械电子工程',
            },
          ],
        },
        {
          text: '文学院',
          value: '文学院',
          children: [
            {
              text: '汉语言文学',
              value: '汉语言文学',
            },
            {
              text: '广告学',
              value: '广告学',
            },
            {
              text: '汉语国际教育',
              value: '汉语国际教育',
            },
          ],
        },
        {
          text: '公共管理学院',
          value: '公共管理学院',
          children: [
            {
              text: '行政管理',
              value: '行政管理',
            },
            {
              text: '劳动与社会保障',
              value: '劳动与社会保障',
            },
            {
              text: '社会工作',
              value: '社会工作',
            },
          ],
        },
        {
          text: '外国语学院',
          value: '外国语学院',
          children: [
            {
              text: '英语',
              value: '英语',
            },
            {
              text: '日语',
              value: '日语',
            },
            {
              text: '朝鲜语',
              value: '朝鲜语',
            },
          ],
        },
        {
          text: '药学与食品科学学院',
          value: '药学与食品科学学院',
          children: [
            {
              text: '制药工程',
              value: '制药工程',
            },
            {
              text: '药物制剂',
              value: '药物制剂',
            },
            {
              text: '中药学',
              value: '中药学',
            },
            {
              text: '药物分析',
              value: '药物分析',
            },
            {
              text: '食品质量与安全',
              value: '食品质量与安全',
            },
          ],
        },
        {
          text: '建筑与城乡规划学院',
          value: '建筑与城乡规划学院',
          children: [
            {
              text: '建筑学',
              value: '建筑学',
            },
            {
              text: '城乡规划',
              value: '城乡规划',
            },
          ],
        },
        {
          text: '金融与贸易学院',
          value: '金融与贸易学院',
          children: [
            {
              text: '国际经济与贸易',
              value: '国际经济与贸易',
            },
            {
              text: '金融学',
              value: '金融学',
            },
            {
              text: '投资学',
              value: '投资学',
            },
            {
              text: '金融工程',
              value: '金融工程',
            },
          ],
        },
        {
          text: '物流管理与工程学院',
          value: '物流管理与工程学院',
          children: [
            {
              text: '物流管理',
              value: '物流管理',
            },
            {
              text: '电子商务',
              value: '电子商务',
            },
            {
              text: '物流工程',
              value: '物流工程',
            },
          ],
        },
        {
          text: '音乐舞蹈学院',
          value: '音乐舞蹈学院',
          children: [
            {
              text: '音乐表演',
              value: '音乐表演',
            },
            {
              text: '舞蹈编导',
              value: '舞蹈编导',
            },
            {
              text: '音乐学',
              value: '音乐学',
            },
          ],
        },
        {
          text: '健康学院',
          value: '健康学院',
          children: [
            {
              text: '健康服务与管理',
              value: '健康服务与管理',
            },
            {
              text: '护理学',
              value: '护理学',
            },
          ],
        },
        {
          text: '航空工程学院',
          value: '航空工程学院',
          children: [
            {
              text: '无人驾驶航空器系统工程',
              value: '无人驾驶航空器系统工程',
            },
            {
              text: '飞行器设计与工程',
              value: '飞行器设计与工程',
            },
          ],
        },
        {
          text: '化学与新能源材料学院',
          value: '化学与新能源材料学院',
          children: [
            {
              text: '应用化学',
              value: '应用化学',
            },
            {
              text: '化学工程与工艺',
              value: '化学工程与工艺',
            },
            {
              text: '材料科学与工程',
              value: '材料科学与工程',
            },
            {
              text: '新能源材料与器件',
              value: '新能源材料与器件',
            },
          ],
        },
        {
          text: '公共基础与应用统计学院',
          value: '公共基础与应用统计学院',
          children: [
            {
              text: '应用统计学',
              value: '应用统计学',
            },
          ],
        },
        {
          text: '体育科学学院',
          value: '体育科学学院',
          children: [
            {
              text: '体育教育',
              value: '体育教育',
            },
            {
              text: '休闲体育',
              value: '休闲体育',
            },
          ],
        },
        {
          text: '阿里云大数据应用学院',
          value: '阿里云大数据应用学院',
          children: [
            {
              text: '数据科学与大数据技术',
              value: '数据科学与大数据技术',
            },
          ],
        },
        {
          text: '继续教育学院',
          value: '继续教育学院',
          children: [
            {
              text: '继续教育学院',
              value: '继续教育学院',
            },
          ],
        },
      ],
      onFilter: (value, record) => record.major.indexOf(value) === 0,
      sorter: (a, b) => a.major.localeCompare(b.major, 'zh-CN'),
    },
    {
      title: '联系方式',
      dataIndex: 'tel',
      key: 'tel',
      sorter: (a, b) => a.tel - b.tel,
    },
    {
      title: '信用分',
      dataIndex: 'credit',
      key: 'credit',
      sorter: (a, b) => a.credit - b.credit,
    },
    // {
    //   title: '志愿积分',
    //   dataIndex: 'integral',
    //   key: 'tel',
    //   sorter: (a, b) => a.name.length - b.name.length,
    // },
    {
      title: '所属组织',
      dataIndex: 'org',
      key: 'org',
      filters: [
        {
          text: '校级组织',
          value: '校级组织',
          children: [
            {
              text: '校青协',
              value: '校青协',
            },
            {
              text: '校学生会',
              value: '校学生会',
            },
            {
              text: '校社联',
              value: '校社联',
            },
            {
              text: '校艺术团',
              value: '校艺术团',
            },
            {
              text: '校通讯社',
              value: '校通讯社',
            },
            {
              text: '校自管会',
              value: '校自管会',
            },
          ],
        },
        {
          text: '计算机学院',
          value: '计算机学院',
          children: [
            {
              text: '青协计算机学院分会',
              value: '青协计算机学院分会',
            },
          ],
        },
      ],
      onFilter: (value, record) => record.org.indexOf(value) === 0,
      sorter: (a, b) => a.org.localeCompare(b.org, 'zh-CN'),
    },
    {
      title: '部门',
      dataIndex: 'dep',
      key: 'dep',
      filters: [
        {
          text: '秘书处',
          value: '秘书处',
        },
        {
          text: '项目管理部',
          value: '项目管理部',
        },
        {
          text: '媒体宣传部',
          value: '媒体宣传部',
        },
        {
          text: '公益实践部',
          value: '公益实践部',
        },
        {
          text: '紫荆服务队',
          value: '紫荆服务队',
        },
        {
          text: '牵手服务队',
          value: '牵手服务队',
        },
        {
          text: '社区服务队',
          value: '社区服务队',
        },
        {
          text: '综合事务部',
          value: '综合事务部',
        },
        {
          text: '常青服务队',
          value: '常青服务队',
        },

      ],
      onFilter: (value, record) => record.dep.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: '职务',
      key: 'tags',
      dataIndex: 'tags',
      filters: [
        {
          text: '执行主席',
          value: '执行主席',
        },
        {
          text: '部长',
          value: '部长',
        },
        {
          text: '副部长',
          value: '副部长',
        },
        {
          text: '干事',
          value: '干事',
        },
      ],
      onFilter: (value, record) => record.tags.indexOf(value) === 0,
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag === '执行主席' ? 'green' : 'yellow';
            if (tag === '部长') {
              color = 'geekblue';
            }
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
      sno: '04170118',
      name: '小黑',
      gender: '男',
      college: '计算机学院',
      major: '计算机科学与技术',
      tel: '18888888888',
      credit: 59,
      integral: 0,
      org: '-',
      dep: '-',
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