import { useState } from 'react'
import { Button } from 'components/atoms'
import { Modal } from 'components/organisms'

const Item = ({ label, value, total, last }) => (
  <li
    className={`flex justify-between items-center ${
      total ? 'font-medium' : ''
    } ${!last ? 'border-b' : ''} pb-0 mb-2`}
  >
    <span>{label}</span>
    <span className={`${!total ? 'text-indigo-600 text-sm' : ''}`}>
      {value}
    </span>
  </li>
)

export const MovingBudget = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="flex flex-col relative">
        <span className="mb-6 font-medium text-xl text-gray-800">
          Moving budget
        </span>
        <ul className="max-w-xs">
          <Item total label="Total" value="$4000" />
          <Item label="Medical checks" value="XX" />
          <Item label="Insurance" value="XX" />
          <Item label="Tax Exempt fee" value="XX" />
          <Item label="Visa" value="XX" />
          <Item label="Airline tickets" value="XX" />
          <Item label="Goods shipping" value="XX" last />
        </ul>
        <span
          className="font-semibold text-indigo-500 mt-6 cursor-pointer hover:underline"
          onClick={() => setShowModal(true)}
        >
          See price breakdown
        </span>
      </div>
      {showModal && (
        <div
          className="flex left-0 top-0 items-center justify-center w-full h-full bg-black bg-opacity-50 fixed z-10"
          onClick={() => setShowModal(false)}
        >
          <Modal
            title="Buy moving budget costs breakdown by Mike"
            body={
              <>
                <span>
                  To get access to Mike's moving budget plan, please buy access
                  to it
                </span>
              </>
            }
            actions={
              <Button
                primary
                className="ml-2"
                onClick={() => {
                  global.analytics.track('Buy moving budget breakdown', {})
                  splitbee.track('Buy moving budget breakdown', {})

                  createRecord({ Email: email, Notes: notes })
                  next()
                }}
              >
                Buy ($30)
              </Button>
            }
          />
        </div>
      )}
    </>
  )
}
