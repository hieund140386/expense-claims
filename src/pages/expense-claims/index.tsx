import { Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
import moment from 'moment'
import { Link } from 'react-router-dom'
import ExpenseClaimsListActions from '../../components/expense-claims-list/actions'
import ExpenseClaimListHeader from '../../components/expense-claims-list/header'
import { PATH } from '../../constants/routes'
import { ExpenseClaimType } from '../../constants/types'
import { expenseClaimsList } from '../../fakeData'
import { Container } from './styles'

const columns: ColumnsType<ExpenseClaimType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => <div key={record.id}>{text}</div>,
    width: '150px'
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    sorter: (record1, record2) => moment(record1.date).millisecond() - moment(record2.date).millisecond()
  },
  {
    title: 'Claimant',
    dataIndex: 'claimant',
    key: 'claimant',
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'Organization',
    dataIndex: 'organization',
    key: 'organization',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Amount claimed',
    dataIndex: 'claimedAmount',
    key: 'claimedAmount',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text, record) => text === 'Approved' ? <Tag key={record.id} color='#87d068'>{text}</Tag> : text === 'Inprogress' ? <Tag key={record.id} color='#2db7f5'>{text}</Tag> : ''
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: (text, record,) => (
      <Link key={record.id} to={`${PATH.expenseClaimsList}/${record.id}/detail`}>Details</Link>
    )
  },
]

const ExpenseClaimsList = () => {
  return (
    <Container>
      <ExpenseClaimListHeader />
      <ExpenseClaimsListActions />
      <Table dataSource={expenseClaimsList} columns={columns} pagination={false} />
    </Container>
  )
}

export default ExpenseClaimsList