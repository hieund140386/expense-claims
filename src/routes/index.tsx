import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PATH } from '../constants/routes'

const ExpenseClaimsList = React.lazy(() => import('../pages/expense-claims'))
const NewExpenseClaimAddition = React.lazy(() => import('../pages/expense-claims/new-addtion'))
const ExpenseClaimDetail = React.lazy(() => import('../pages/expense-claims/details'))

const Router:FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.expenseClaimsList} element={<ExpenseClaimsList />} />
        <Route path={PATH.expenseClaimsList}>
          <Route path={PATH.expenseClaimDetail} element={<ExpenseClaimDetail />} />
          <Route path={PATH.expenseClaimNewAddtion} element={<NewExpenseClaimAddition />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router