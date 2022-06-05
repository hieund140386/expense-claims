import React from 'react'
import { Container } from './styles'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { PATH } from '../../../constants/routes'
import { PlusOutlined } from '@ant-design/icons'

const ExpenseClaimListHeader = () => {
  return (
    <Container>
      <p>Expense claim list</p>
      <Button type='primary' danger>
        <Link to={`${PATH.expenseClaimsList}/${PATH.expenseClaimNewAddtion}`}>
          Add New
          <PlusOutlined />
        </Link>
      </Button>
    </Container>
  )
}

export default ExpenseClaimListHeader