import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

export default function MyModal({isOpen, setIsOpen}) {
//  let [isOpen, setIsOpen] = useState(false)
 
  // function openModal() {
  //   console.log("opened modal")
  //   setIsOpen(true)
  // }

  function close() {
    setIsOpen(false)
    console.log("closed modal")

  }
console.log("isOpen from modal",isOpen)
  return (
   
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed top-[-150px] inset-0 sm:inset-[-15vh]  md:inset-[-150px]  z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-transparent p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <iframe className='w-55vw h-30vh sm:w-[70vw] md:w-[80.66vh] sm:h-[50vh]' src="https://www.youtube.com/embed/7e90gBu4pas" title="Working at Envato" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              
            </DialogPanel>
          </div>
        </div>
      </Dialog>
  
  )
}