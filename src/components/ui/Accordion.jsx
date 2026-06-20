import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-brand-600"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-slate-900">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-slate-600">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6">
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  )
}
