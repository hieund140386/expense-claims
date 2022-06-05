import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PATH } from '../constants/routes'
import ExpenseClaimsList from '../pages/expense-claims'
import ExpenseClaimDetail from '../pages/expense-claims/details'
import NewExpenseClaimAddition from '../pages/expense-claims/new-addtion'

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