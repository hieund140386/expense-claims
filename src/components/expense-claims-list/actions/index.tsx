import { DatePicker, Select, Space } from 'antd'
import React from 'react'
import { expenseClaimsList } from '../../../fakeData'
import { Utils } from '../../../utils'
import { Container } from './styles'

const { Option } = Select

const ExpenseClaimsListActions = () => {
  return (
    <Container>
      <Space direction='vertical'>
        <DatePicker placeholder='Date' />
      </Space>
      <Select
        placeholder="Select Claimant"
      >
        {
          Utils.filter(expenseClaimsList, 'claimant').map((item, idx) => {
            return (
              <Option key={`${idx}`} value={item}>{item}</Option>
            )
          })
        }
      </Select>
      <Select
        placeholder="Select Department"
      >
        {
          Utils.filter(expenseClaimsList, 'department').map((item, idx) => {
            return (
              <Option key={`${idx}`} value={item}>{item}</Option>
            )
          })
        }
      </Select>
      <Select
        placeholder="Select Type"
      >
        {
          Utils.filter(expenseClaimsList, 'type').map((item, idx) => {
            return (
              <Option key={`${idx}`} value={item}>{item}</Option>
            )
          })
        }
      </Select>
      <Select
        placeholder="Select Status"
      >
        {
          Utils.filter(expenseClaimsList, 'status').map((item, idx) => {
            return (
              <Option key={`${idx}`} value={item}>{item}</Option>
            )
          })
        }
      </Select>
    </Container>
  )
}

export default ExpenseClaimsListActions