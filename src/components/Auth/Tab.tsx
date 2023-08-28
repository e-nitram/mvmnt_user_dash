"use client"
import { useState } from 'react'

const Tabs = ({
  tabList
}: {
  tabList: Array<{
    title: string
    body: React.ReactNode
  }>
}) => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex)
  }

  return (
    <div className="w-full">
      <div className="">
        <ul className="flex w-full text-sm font-bold text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
          {
            tabList.map((item, index) => (
              <li className="w-full" key={index}>
                <button
                  className={`w-full h-12 ${activeTab === index ? 'text-pink-500 border-pink-500 border-b-2' : 'text-black-alpha-900 border-black-alpha-100 border-b'}`}
                  onClick={() => setActiveTab(index)}
                >
                  {item.title}
                </button>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="mt-4">
        {tabList[activeTab].body}
      </div>
    </div>
  )
}

export default Tabs