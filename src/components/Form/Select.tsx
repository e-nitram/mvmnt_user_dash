export const SelectField = ({
  id = '',
  name = '',
  label = '',
  value = '',
  required = false,
  placeholder = '',
  onChange,
  error = false,
  options = [],
  helperText = ''
}: {
  id: string
  name: string
  label: string
  value: string
  required: boolean
  placeholder: string
  onChange: ChangeEvent<HTMLSelectElement>
  error?: string | boolean
  helperText: string | boolean
  options: Array<string>
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 px-2">
        <h3 className="font-bold text-md leading-6">{label}</h3>
        {required && <span className="text-xs text-red-500">Required</span>}
      </div>
      <div className="inline-block relative mt-1">
        <select
          id={id}
          name={name}
          className="block appearance-none w-full bg-white text-sm leading-6 px-4 border border-black-alpha-100 pr-8 rounded-lg h-10"
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        >
          {
            options.map((item, index) => <option key={index} value={item}>{item}</option>)
          }
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center w-10 h-10">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.10938 9.06348L12.1094 15.0635L18.1094 9.06348" stroke="#181821" strokeOpacity="0.95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      {error && <p className="text-[10px] leading-4 px-2 mt-2 text-red-500">{helperText}</p>}
    </div>
  )
}
