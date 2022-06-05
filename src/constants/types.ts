export interface CommonType {
  [name: string]: string | number,
}

export interface ExpenseClaimType {
  id: number,
  name: string,
  date: string,
  claimant: string,
  department: string,
  organization: string,
  type: string,
  claimedAmount: string,
  status: string,
}