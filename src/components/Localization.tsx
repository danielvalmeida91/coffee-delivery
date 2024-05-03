import { MapPin } from "@phosphor-icons/react"
export const Localization = () => {
  return (
    <div className="flex items-center gap-1 bg-purple-light p-2 rounded-lg">
      <MapPin size={14} weight="fill" className="text-purple" />
      <p className="text-purple">Leopoldina, MG</p>
    </div>
  )
}