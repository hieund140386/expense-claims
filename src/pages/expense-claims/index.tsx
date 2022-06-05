import { Table } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
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
      <Table dataSource={expenseClaimsList} columns={columns} />
    </Container>
  )
}

export default ExpenseClaimsList