import { useState, useEffect } from 'react'
import { Button } from 'components/atoms'
import {
  Modal,
  EmailStep,
  PaymentStep,
  FinalStep,
  BookingStep,
} from 'components/organisms'
import splitbee from '@splitbee/web'
import mixpanel from 'mixpanel-browser'

export const BookingWidget = ({ hide }) => {
  const [showBookingStep, setShowBookingStep] = useState(false)
  const [showEmailStep, setShowEmailStep] = useState(true)
  const [showPaymentStep, setShowPaymentStep] = useState(false)
  const [showFinalStep, setShowFinalStep] = useState(false)

  // useEffect(() => {
  //   const widget = new window.TimekitBooking()
  //   widget.init({
  //     app_key: 'test_widget_key_lRlrwLB9tUg4wYzO8L4pCTzCaoiNhh1i',
  //     project_id: '932841d0-fad8-4df9-ad29-43c56c0818ec',
  //     resources: ['b34cd82d-f77e-4f17-864c-6c147c7cbb79'],
  //     disable_confirm_page: true,
  //     callbacks: {
  //       clickTimeslot: (timeslot) => {
  //         splitbee.track('Select timeslot', {
  //           time: timeslot.start._i,
  //         })
  //         global.analytics.track('Select timeslot', {
  //           time: timeslot.start._i,
  //         })
  //         // mixpanel.track('Select timeslot', {
  //         //   time: timeslot.start._i,
  //         // })
  //         setShowEmailStep(true)
  //       },
  //     },
  //   })
  // }, [])

  if (showEmailStep) {
    return (
      <EmailStep
        close={() => {
          alert('yo')
          setShowEmailStep(false)
          hide()
        }}
        next={() => {
          setShowEmailStep(false)
          setShowBookingStep(true)
        }}
      />
    )
  }

  if (showBookingStep) {
    return (
      <BookingStep
        hide={hide}
        setShowPaymentStep={setShowPaymentStep}
        setShowBookingStep={setShowBookingStep}
      />
    )
  }

  if (showPaymentStep) {
    return (
      <PaymentStep
        close={() => {
          setShowPaymentStep(false)
          hide()
        }}
        next={() => {
          setShowPaymentStep(false)
          setShowFinalStep(true)
        }}
      />
    )
  }

  if (showFinalStep) {
    return (
      <FinalStep
        close={() => {
          setShowFinalStep(false)
          hide()
        }}
      />
    )
  }

  return (
    <div
      className="flex items-center justify-center w-full h-full bg-black bg-opacity-50 fixed z-10"
      onClick={hide}
    >
      <div className="w-11/12 lg:w-3/4" onClick={(e) => e.stopPropagation()}>
        <div id="bookingjs"></div>
      </div>
    </div>
  )
}
