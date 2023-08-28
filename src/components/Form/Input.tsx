import { useTranslation } from '@/i18n/client'

export const InputField = ({
  id = '',
  name = '',
  label = '',
  value = '',
  required = false,
  placeholder = '',
  onChange,
  error = false,
  type = 'text',
  helperText = ''
}: {
  id: string
  name: string
  label: string
  value: string
  required: boolean
  placeholder: string
  onChange: ChangeEventHandler<HTMLInputElement>
  error?: string | boolean
  type: string
  helperText?: string | boolean
}) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 px-2">
        <h3 className="font-bold text-md leading-6">{label}</h3>
        {required && <span className="text-xs text-red-500">{t("FORM.REQUIRED")}</span>}
      </div>
      <input
        id={id}
        name={name}
        className="text-sm leading-6 px-4 mt-1 border border-black-alpha-100 rounded-lg h-10"
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        type={type}
      />
      {error && <p className="text-[10px] leading-4 px-2 mt-2 text-red-500">{helperText}</p>}
    </div>
  )
}
